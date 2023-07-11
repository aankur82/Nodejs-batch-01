const zlib=require('node:zlib')
const fs=require('node:fs')
const gzip=zlib.createUnzip()

const input=fs.createReadStream('hello.txt.gz')
const output=fs.createWriteStream('hello1.txt')
input.pipe(gzip).pipe(output)