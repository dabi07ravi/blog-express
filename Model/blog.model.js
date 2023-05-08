const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title : {
        type: String,
        requirred: true
    },
    image : {
        type:String, 
        requirred: true
    },
    
    steps : [{
        title : {
            type:String,
            required: true
        },  
        image: {
            type: String,
            required: true
        },
        url: {
            type: String
        },
        description : {
            type: String,
            required: true
        },
    }],
    category : {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: true
    },
    slug : String,
},
{ timestamps: true })

const blogModel = mongoose.model("blog", blogSchema);

module.exports = blogModel; 