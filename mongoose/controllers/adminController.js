const Product=require('../models/shopModel')



exports.add= (req, res, next) =>{
    let name=req.body.name
    let price=req.body.price
    let desc=req.body.desc
    let imgUrl=req.body.imgurl
    console.log(name)
    const product=new Product({
        name:name,
        price:price,
        description:desc,
        imgUrl:imgUrl
    })
    product.save().then((result)=>console.log(result))
    .catch((err)=>console.log(err))
    res.redirect('/admin/add')
  }
