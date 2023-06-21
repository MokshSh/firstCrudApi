let prodModel=require('../store/prodModel').model;
// let editProdModel=require('../store/prodModel').EditModel;
exports.findAllApi= ((req,res)=>{prodModel.find({}).then((e)=>{res.send(e)}).catch((f)=>{res.send(f)})})

exports.postData= async (req,res)=>{let newProd=new prodModel({name:req.body.name,email:req.body.email,password:req.body.password,createdBy:req.body.createdBy,createdAt: new Date()})
let x=await prodModel.find({email:req.body.email})
if(x.length==0){
const saved= newProd.save().then((e)=>{res.send(e)}).catch((f)=>{res.send(f)})}
else{res.send("The email already exists")}}

exports.patchData= async(req,res)=>
{
    let prodToBeUpd=await prodModel.findOne({email:req.params.email});
        let x={...prodToBeUpd._doc}
        x.name=  req.body.name;
        x.password=  req.body.password;
        x.updatedBy=  req.body.updatedBy;
        x.updatedOn=  new Date();
 await prodModel.findOneAndUpdate({email:req.params.email},x)
    res.send(x)
}


exports.delAll= (req,res)=>{prodModel.deleteMany({}).then((e)=>{res.send("All data has been deleted from the database")})}

exports.delByMail=async (req,res)=>{let requiredProduct= await prodModel.find({email:req.params.email});if(requiredProduct.length!=0){prodModel.deleteMany({email:req.params.email}).then((e)=>{res.send(`The product with email: ${req.params.email} is successfully deleted.  ${requiredProduct[0]}`)})}
else{res.send(`No such product with email: ${req.params.email} exists in the database.`)}}