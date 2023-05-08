
const { body } = require('express-validator');
const blogModel = require('../Model/blog.model');

class blogService{
async getAll(size,category){

   
    if(!size || size === undefined || size === null ||  isNaN(size))
    {
        size  = 10
    }

    const limit = parseInt(size);
   
    let query ={
        slug: {
            $exists: true
        }
    }
    if(category){
        query['category']=category
    }

    const blogdata = await blogModel.find(query)
    .select({
        title:1,
        slug:1,
        category:1,
        image:1,
        description:1 
    })
    .limit(limit)
    .exec();

    return { size, blogdata : blogdata, total: blogdata.length};
    
};

async getBySlug(slug){
    
    const slugdata = await blogModel.findOne({slug});
    
    return slugdata;
    
    
};

async getByCategories(size){
    if(!size || size === undefined || size === null ||  isNaN(size))
    {
        size  = 10
    }

     const categoryData = await blogModel.aggregate([
        { "$group": { "_id": "$category" } },
        { "$limit": parseInt(size) }
    ])
  
   
    return {size, categoryData:categoryData, total:categoryData.length};
}

async onlyCategory(category){
   
    const onlycategoryData = await blogModel.findOne({category});
    return onlycategoryData;
}

async genrateSlug(title) {

    let slug = title.toLowerCase();
    slug = slug.replace(/\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi, '');
    slug = slug.replace(/ /gi, "-");
    slug = slug.replace(/\-\-\-\-\-/gi, '-');
    slug = slug.replace(/\-\-\-\-/gi, '-');
    slug = slug.replace(/\-\-\-/gi, '-');
    slug = slug.replace(/\-\-/gi, '-');
    slug = '@' + slug + '@';
    slug = slug.replace(/\@\-|\-\@|\@/gi, '');
    return Promise.resolve(slug);
}

async generatePost(body){
    
    body['slug'] = await this.genrateSlug(body['title'])
    const generatePost = await blogModel.create(body);
    return generatePost;
}

async delPost(id){
    

    const delPost = await blogModel.findByIdAndDelete(id);
    return delPost;
    
}

async updatePost(id,body){
    
    const updPost = await blogModel.findByIdAndUpdate(id,body);
    return updPost;
}


}

module.exports = blogService;