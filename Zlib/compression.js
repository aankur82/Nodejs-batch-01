const zlib=require('node:zlib')
const fs=require('node:fs')
const gzip=zlib.createGzip()

const input=fs.createReadStream('hello.txt')
const output=fs.createWriteStream('hello.txt.gz')
input.pipe(gzip).pipe(output)


