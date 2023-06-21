require('dotenv').config();
require('./store/conn')
const express=require('express');
const app=express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
let prodRoutes=require('./routes/prodRoutes')
app.use('/',prodRoutes)
app.listen(process.env.PORT)