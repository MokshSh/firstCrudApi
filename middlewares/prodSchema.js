const Joi=require("joi");
const mongoose = require("mongoose");
const Joigoose=require("joigoose")(mongoose);
const joiSchema=Joi.object({
    name:Joi.string().required(),
    email:Joi.string().email().required(),
    password:Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
   createdBy:Joi.string().required(),
   createdAt:Joi.date(),
   updatedBy:Joi.string(),
   updatedOn:Joi.date()
    })

let InfoSchema = new mongoose.Schema(Joigoose.convert(joiSchema));
// const joiEditSchema=Joi.object({
//     name:Joi.string().optional(),
//     password:Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).optional(),
//     updatedBy: Joi.string().required(),
//     updatedAt:Joi.date()
// })
// let EditSchema = new mongoose.Schema(Joigoose.convert(joiEditSchema));
module.exports={InfoSchema};