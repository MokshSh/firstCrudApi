const express=require('express');
let prodModel=require('../store/prodModel').model;
// const e = require('express');
const prodRoutes=require('../controllers/prodControllers')
let Router=express.Router();
Router.get('/',prodRoutes.findAllApi)
Router.post('/',prodRoutes.postData)

Router.patch('/:email',prodRoutes.patchData)

Router.delete('/deleteAll',prodRoutes.delAll)
Router.delete('/:email',prodRoutes.delByMail)

module.exports=Router;