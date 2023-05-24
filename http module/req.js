const http=require('node:http');

const port=8000;
const host='localhost';

const requestListner=(req,res)=>
{  
        console.log(req.url)
        res.setHeader("Content-Type","text/html")
        res.writeHeader(200)
        res.write('hello')
        res.end()
   
}
const server=http.createServer(requestListner)
server.listen(port,host,()=>{
    console.log(`your server is running on ${port}`)
})