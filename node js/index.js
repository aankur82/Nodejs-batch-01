a="manish"
console.log(a)
// function fun2() {
//     console.log('fun2')
// }
// function fun1() {
//     console.log('before fun2')
//     fun2()
//     console.log('after fun2')
// }
// fun1()
// setTimeout(()=>{//async
//     console.log("set timeout")
// },0)
// console.log("hello")//sync
process.nextTick(()=>{console.log("nextTick 1")})
Promise.resolve().then(() => {
    console.log('promise 1')
  }).then(() => {
    console.log('promise 2')
  })
  setTimeout(()=>{console.log("settime 1")},0)
process.nextTick(()=>{console.log("nextTick 2")})

