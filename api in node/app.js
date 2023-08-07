
var express = require('express');

const connect = require('./utilities/mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')

var adminRouter = require('./routes/adminApi');
var usersRouter = require('./routes/users');

const httpserver=require('./bin/www');

var app = express();
connect();
// view engine setup

// app.use(express.json());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors())
// app.use(express.urlencoded({ extended: false }));
// app.use((req,res,next)=>{
//   res.setHeader('access-control-allow-origin','*');
//   res.setHeader('access-control-allow-headers','Content-Type:application/JSON'); 
//   next()
// })
app.use('/admin', adminRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.send("<h1>page not found</h1>");
});

module.exports = app;







