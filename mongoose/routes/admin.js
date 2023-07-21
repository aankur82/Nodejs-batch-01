var express = require('express');
var router = express.Router();
var adminController=require('../controllers/adminController')
/* GET home page. */
router.get('/add', function(req, res, next) {
  res.render('admin/add-product.ejs');
});
router.post('/add',adminController.add);





module.exports = router;
