exports.is_auth=(req,res,next)=>{

    let token = req.query.token
    try {
        const decode = jwt.verify(token, secret_key)
        req.user=decode.name
        next()
      } catch (error) {
        res.status(200).json({
          massege: "u are nor allowed",
          is_login:false,
          body: {
            name: "hello"
          }
        })
    }



}