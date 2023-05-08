const mongoose = require('mongoose');



const emailSchema= new mongoose.Schema({

    
    email: {
        type: String,
        required: true, 
    }
  

    
})

const emailModel = mongoose.model("email", emailSchema);

module.exports = emailModel;