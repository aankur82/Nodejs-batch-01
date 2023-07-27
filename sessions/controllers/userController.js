let user='pawan'
exports.login=(req,res,next)=>{
    if(req.body.user==user)
    {
        req.session.login=true
        
        res.redirect('/users')
    }
    else{
         res.redirect('/users')
    } 

}
exports.home=(req,res,next)=>{
    const login=req.session.login

    console.log(req.session)
    if(login)
    {
        
        res.render('home.ejs',{stat:login})
    }
    res.render('home.ejs',{stat:false})
  
  }

exports.logout=(req,res,next)=>{
    req.session.destroy();
    res.redirect('/users');

}