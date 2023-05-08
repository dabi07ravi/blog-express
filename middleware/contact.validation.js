
var validator = require('validator');

const result = async (req,res,next) => {
    const validate = await validator.isEmail(req.body.email); 
    const nameValidate = await validator.isLength(req.body.name, {min : 1})
    if(!validate){
        return res.status(401).json({
            message: "Enter the valid email"
        })
    }else if(!nameValidate){
       return  res.status(401).json({
        message: "Enter the name"
       })
    }else{
        next();
        }
    }

    
    



module.exports = result;