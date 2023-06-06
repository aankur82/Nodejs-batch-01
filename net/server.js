const net=require('node:net')
const port =3001
const server=net.createServer()

server.on("connection",()=>{console.log("new connection made")})
server.on("close",()=>{console.log("connection closed")})

server.listen(port,()=>{
    console.log(`your server is running on ${port}`)
})