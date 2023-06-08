// const { createHmac } = require('node:crypto');

// const secretKey = 'abcdefg';
// const data='I love cupcake'
// const hashObject = createHmac('sha256', secretKey)
// const hashdata=hashObject.update(data).digest('hex')

// console.log(hashdata);
// Prints:
//   c0fa1bc00531bd78ef38c628449c5102aeabd49b5dc3a2a516ea6ea959d6658e
//Encryption=>

const crypto = require("crypto");

// Generate a secret key for encryption and decryption.
const secretKey = crypto.randomBytes(32);

// Generate an initialization vector
const iv = crypto.randomBytes(16);

// data to be encrypted
const plainText = "This is a secret message";

// create cipher object
const cipher = crypto.createCipheriv("aes-256-cbc", secretKey, iv);

// encrypt the data
let encryptedText = cipher.update(plainText, "utf-8", "hex");

// finalize the encryption
encryptedText += cipher.final("hex");

console.log(encryptedText);
  