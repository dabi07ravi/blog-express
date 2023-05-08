const emailService = require('../service/email.service');
const EmailService = new emailService();



class emailContrtoller{
    async emailPostReq(req,res){
      
       
        const email = await EmailService.createemail(req.body);
         res.status(200).json({
            msg: "success",
            data: email
         })
    }
  } 


module.exports = emailContrtoller;