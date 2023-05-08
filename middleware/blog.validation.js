// const validator = require('validator');

// const result = async (req,res,next) => {
//     const titleVal = await validator.isLength(req.body.title, {min : 1});
//     const imageVal = await validator.isLength(req.body.image, {min: 1});
   
//     const cateVal = await validator.isLength(req.body.category, {min: 1});
//     const desVal = await  validator.isLength(req.body.description, {min : 1});
//     if(!titleVal){
//         return res.status(401).json({
//             message: "add title"
//         })
//     }else if(!imageVal){
//         return res.status(401).json({
//             message: "Upload the image"
//         })
//     }else if(!stepsVal){
//         return res.status(401).json({
//             message: "add one steps atleast"
//         })
//     }else if(!cateVal){
//         return res.status(401).json({
//             message: "add category"
//         })
//     }else if(!desVal){
//         return res.status(401).json({
//             message: "add description"
//         })
//     }else{
//         next();
//     }
// }
  const Joi = require('joi')
const validation = async (req,res,next) => {
    const schema = Joi.object().keys({
        title: Joi.string().required(),
        image: Joi.string().required(),
        steps: Joi.array().items(Joi.object().keys({
           title: Joi.string().required(),
           image: Joi.string().required(),
           description: Joi.string().required(), 
        })),
        category: Joi.string().required(),
        description: Joi.string().required(), 
  })
  const {error} = schema.validate(req.body);
  if(error){
    const {details} = error
    res.status(401).json({error: details})
  }else{
    next();
  }
}

module.exports = validation;
