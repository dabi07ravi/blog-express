const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({

    subject: String,
    name: {
        type: String,
        requirred: true
    },
    email: {
        type: String,
        requirred: true
    },
    message: String

    
})

const contactModel = mongoose.model("contact", contactSchema);

module.exports = contactModel;