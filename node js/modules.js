//modules=>
//inbuilt
//npm 
//user-defined
// console.log(module)
function sum(a,b) {
    return a+b
}
const a="hello"
console.log(sum(56,34))
// module.exports.a=a
// export default sum;
// module.exports.sum=sum
module.exports={
    a,sum
}