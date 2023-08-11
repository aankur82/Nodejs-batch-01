var express = require('express');
var router = express.Router();
var adminController=require('../controllers/adminController')
/* GET home page. */
const {is_auth}=require('../utilities/auth')

router.post('/add',is_auth,adminController.add);
router.get('/weather',adminController.show);
router.post('/login',adminController.login)
router.get('/home',is_auth,adminController.home)
router.post('/home',(req,res,next)=>{
    const token= req.query
    console.log(token)
    res.json("hello")
})
router.get('/getdata',adminController.getdata)





module.exports = router;
