const express = require('express')
const adminRoute=require('./routes/admin')
// import route from "./routes/admin.js";
const userRoute=require('./routes/user')

const app = express()
app.use('/admin',adminRoute)
app.use(userRoute)
app.use((req,res,next)=>{
    res.send("page not found")
})

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
app.listen(3000)