
const net=require('node:net')
// const { buffer } = require('stream/consumers')
const port =3001
const server=net.createServer((Socket)=>{
    Socket.on("connect",()=>{console.log("connection made successful")})
    // Socket.on()
    Socket.on("data",(stream)=>{
        console.log(stream.toString('utf-8'))
    })
    // const buff=new buffer(2)
    // buff[0]=23
    // buff[1]=34
    Socket.write("hello buddy",'utf-8')
    Socket.once('close',()=>{
        console.log("closed")
    })
})
// server.on("connection",(Socket)=>{
//     console.log(Socket.address())
// })


server.listen(port,'192.168.0.14',()=>{
    console.log(`your server is running on ${port}`)
})