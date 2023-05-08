const contactModel = require('../Model/contact.model');

class contactService{
    async createContact(body){
        const contactData = await contactModel.create(body);
        return contactData;
    }
}

module.exports = contactService;