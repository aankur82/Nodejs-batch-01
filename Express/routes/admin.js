const express=require('express');
const route=express.Router();

const adminController=require('../controllers/adminController')



route.get('/add-item',adminController.additemform);

route.post('/add-item',adminController.additemdb)
route.get('/delete',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'..','views','add.html'))
})

// route.get('/add-item',(req,res,next)=>{
//     res.send("<form action='/admin/add-item' method='post'><input type='text'/><input type='submit'></form>")
// })


module.exports=route;






// route.get('/add-item',(req,res,next)=>{
//     res.sendFile(path.join(__dirname,'..','views','add-item.html'))
// })
// route.post('/add-item',(req,res,next)=>{
//     // connection((db)=>{
//     //     db.collection('products').insertOne({name:"navaratan oil"})
//     // })
//     res.redirect('/admin/add-item')
    
// })
// route.get('/delete',(req,res,next)=>{
//     res.sendFile(path.join(__dirname,'..','views','add.html'))
// })

