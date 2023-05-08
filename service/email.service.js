const emailModel = require('../Model/email.model');

class emailService{
    async createemail(body){
        const emailData = await emailModel.create(body);
        return emailData;
    }
}

module.exports = emailService;