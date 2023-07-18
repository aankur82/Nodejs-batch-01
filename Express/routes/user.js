const express=require('express');
const route=express.Router();

route.get('/',(req,res,next)=>{
    res.send("this is home page")
})


module.exports=route;