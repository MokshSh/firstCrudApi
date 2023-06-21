let schema=require('../middlewares/prodSchema')
const mongoose=require('mongoose')
const model = mongoose.model('product', schema.InfoSchema);
// module.exports= 
// const EditModel=mongoose.model('editProduct',schema.EditSchema)
module.exports={model}