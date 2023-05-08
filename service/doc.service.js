const blogModel = require('../Model/blog.model');

class docService{
    async getAllData(){
       let data = await blogModel.find().select({
        steps: 1
       }).limit(1);
       return data;
    }
}

module.exports = docService;