
const path = require('path');
const connection = require('../utilities/database')

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
exports.singleitem = (req, res, next) => {
    let item;
    connection((db) => {
        db.collection('products').findOne()
            .then((result) => {
                item = result;// console.log(item)
                let a=[34,23,45,67]
                let b=true
                res.render('singleitem.ejs',{
                    name:item.name,
                    arr:a,
                    b
                })
            }
            )
            .catch(err => console.log(err))
    })

}