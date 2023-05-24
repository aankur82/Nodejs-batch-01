const http=require('node:http');
const fs=require('node:fs/promises')
const port=8000;
const host='localhost';

const requestListner=(req,res)=>
{  
    fs.readFile('index.html','utf-8').then((result)=>
    {
        res.setHeader("Content-Type","text/html")
        res.writeHeader(200)
        res.write(result)
        res.end()
    })
}
const server=http.createServer(requestListner)
server.listen(port,host,()=>{
    console.log(`your server is running on ${port}`)
})