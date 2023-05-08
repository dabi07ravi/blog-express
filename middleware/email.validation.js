
var validator = require('validator');

const result = async (req,res,next) => {
    const validate = await validator.isEmail(req.body.email); 
    (validate)?( next()):res.status(401).json({
        message: "Invalid Email"
    })
    }



module.exports = result;