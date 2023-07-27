var express = require('express');
var router = express.Router();
const userController=require('../controllers/userController')

/* GET users listing. */
router.get('/',userController.home );

router.get('/login',(req,res,next)=>{
    res.render('login.ejs')
} );
router.post('/login',userController.login);
router.get('/logout',userController.logout);

module.exports = router;
