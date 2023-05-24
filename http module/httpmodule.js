const http=require('node:http')

http.createServer((req,res)=>
{
   // res.setHeader('content-type','application/json')
    res.setHeader('Content-Type','text/csv')
    res.writeHead(200)
    // res.write(`[{'name':'sunil'},{'class':12}]`)
    res.write(`name,sunil\nname,pankaj`)
    res.end()

}).listen(3000,"localhost",()=>{
    console.log("your code is started on port 3000");
})






