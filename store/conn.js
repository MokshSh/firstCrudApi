const mongoose=require('mongoose');
let localURL="mongodb://127.0.0.1:27017/ProdDatabase";
mongoose.connect(localURL).then((e)=>{console.log("Successfully connected to the Database")}).catch((f)=>{console.log("Couldn't connect to the Database")})
