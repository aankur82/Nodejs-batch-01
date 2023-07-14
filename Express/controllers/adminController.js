
const path=require('path');
const connection=require('../utilities/database')

exports.additemform=(req,res,next)=>{
    
    res.sendFile(path.join(__dirname,'..','views','add-item.html'))
}

exports.additemdb=(req,res,next)=>{
    let fname=req.body.name
    
    connection((db)=>{
        db.collection('products').insertOne({name:fname})
    })
    res.redirect('/admin/add-item')
    
}