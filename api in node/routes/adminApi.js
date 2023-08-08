var express = require('express');
var router = express.Router();
var adminController=require('../controllers/adminController')
/* GET home page. */

router.post('/add',adminController.add);
router.get('/weather',adminController.show);
router.post('/login',adminController.login)
router.get('/home',adminController.home)
router.post('/home',(req,res,next)=>{
    const token= req.query
    console.log(token)
    res.json("hello")
})
router.get('/getdata',adminController.getdata)





module.exports = router;
