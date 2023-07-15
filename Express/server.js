const express = require('express')
const adminRoute=require('./routes/admin')

const userRoute=require('./routes/user')
const path=require('path')
const bodyParser=require('body-parser')
const ejs=require('ejs')

const app = express()

app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,"public")))
app.use('/admin',adminRoute)
app.use(userRoute)
app.use((req,res,next)=>{
    res.send("page not found")
})


app.listen(3000)



// app.get('/',(req,res,next)=>
// res.send("this is home page")
// )
// app.get('/about',(req,res,next)=>
// res.send("this is about page")
// )
// app.get('/form',(req,res,next)=>
// res.send("<form action='/form' method='post'><input type='text'/><input type='submit'></form>")
// )
// app.post('/form',(req,res)=>{
//     res.send("form submitted")
// })

// app.use('/about',(req,res,next)=>{
//     res.send("hello")
// })


// app.use('/',(req,res,next)=>{
//     res.send("hello buddy")
    
// })