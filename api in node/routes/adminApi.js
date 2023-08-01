var express = require('express');
var router = express.Router();
var adminController=require('../controllers/adminController')
/* GET home page. */

router.post('/add',adminController.add);
router.get('/weather',adminController.show);



module.exports = router;
