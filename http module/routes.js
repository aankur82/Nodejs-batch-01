const http = require('node:http');
const fs = require('node:fs')
const url = require('node:url')
const port = 8000;
const host = 'localhost';

const requestListner = (req, res) => {
    const q=url.parse(req.url,true);
    const path=q.pathname;
    if (req.url == '/') {
        res.setHeader("Content-Type", "text/html")
        res.writeHeader(200)
        res.write(fs.readFileSync('index.html','utf-8'))
        res.end()
    }
    else if (req.url == '/about') {
        res.setHeader("Content-Type", "text/html")
        res.writeHeader(200)
        res.write("this is about page")
        res.end()
    }
    else if (req.url == '/contact') {
        res.setHeader("Content-Type", "text/html")
        res.writeHeader(200)
        res.write("this is contact page")
        res.end()
    }
    else if (path == '/get') {
        

        res.setHeader("Content-Type", "text/html")
        res.writeHeader(200)
        res.write(`${q.query.name}`)
        res.end()
    }
    else{
        res.setHeader("Content-Type", "text/html")
        res.writeHeader(404)
        res.write("error page not found ")
        res.end()
    }
}
const server = http.createServer(requestListner)
server.listen(port, host, () => {
    console.log(`your server is running on ${port}`)
})


