const cp=require('child_process')
// const { error } = require('console')
// const { stdout, stderr } = require('process')

// cp.exec("dir",{cwd:'./DAAC'},(error,stdout,stderr)=>
// {
//     if(error)
//     {
//         console.log(error)
//     }
//     else
//     {
//          console.log(stdout)
//     }   
// })
// const child = cp.execFile("hello.bat", (error, stdout, stderr) => {
//     if (error) {
//       throw error;
//     }
//     console.log(stdout);
//   });
  cp.fork('process.js',["pankaj"])