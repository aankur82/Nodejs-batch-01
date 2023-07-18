
const path = require('path');
const connection = require('../utilities/database')
const objectId=require('mongodb').ObjectId

exports.additemform = (req, res, next) => {

    res.render('add-item.ejs')
}

exports.additemdb = (req, res, next) => {
    let fname = req.body.name

    connection((db) => {
        db.collection('products').insertOne({ name: fname })
    })
    res.redirect('/admin/add-item')

}
exports.showAll = (req, res, next) => {
    let item;
    connection((db) => {
        db.collection('products').find({}).toArray()
        .then((data)=>{
            res.render('showAll.ejs',{data})
        }).catch((err)=>{
            console.log(err)
        })      
})
}
exports.delete = (req, res, next) => {
    let id = req.params.id
    // console.log(id)

    connection((db) => {
        db.collection('products').deleteOne({_id:new objectId(id)})
    })
    res.redirect('/admin/showall')

}