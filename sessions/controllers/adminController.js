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
    // console.log(req.headers.cookie)
    // product.save().then((result)=>console.log(result))
    // .catch((err)=>console.log(err))
    console.log(req.cookies)
    res.redirect('/admin/add')
  }


exports.show=(req,res,next)=>{
    Product.find().then(data=>{
        console.log(data)
        res.setHeader('Set-Cookie', 'isLoggedin=true');
        res.send("hello")
    })
    .catch(err=>console.log(err))
}




