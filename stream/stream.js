// const fs=require('node:fs')

// const data=fs.createReadStream('test.txt',{ highWaterMark: 1 * 1024 })
// // data.setEncoding('utf-8')
// // data.read(1)
// const write=fs.createWriteStream('hello.txt')
// data.on('data',(chunk)=>
// {   write.write(chunk)
//     console.log(`chunk=> `,chunk)
// })




const http=require('node:http')
const fs=require('node:fs')

const port=8000
http.createServer((req,res)=>
{
    // const data=fs.readFileSync('sample.txt')
    const data=fs.createReadStream(`sample.txt`)
    res.writeHead(200,{'Content-Type':'text/plain'})
    // data.on('data',(chunk)=>{res.write(chunk)})
    data.pipe(res)
    
    // res.end()
}).listen(8000)