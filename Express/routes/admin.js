const express=require('express');
const route=express.Router();
const path=require('path');

route.get('/add-item',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'..','views','add-item.html'))
})
route.get('/delete',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'..','views','add.html'))
})








// route.get('/add-item',(req,res,next)=>{
//     res.send("<form action='/admin/add-item' method='post'><input type='text'/><input type='submit'></form>")
// })
route.post('/add-item',(req,res,next)=>{
    res.send("you added an item")
})




module.exports=route;



