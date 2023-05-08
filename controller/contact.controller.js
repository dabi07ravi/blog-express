const contactService = require('../service/contact.service');
const ContactService = new contactService();

class contactContrtoller{

    async contactPostReq(req,res){
         const contact = await ContactService.createContact(req.body);
         res.status(200).json({
            msg: "success",
            data: contact
         })
    }
}

module.exports = contactContrtoller;