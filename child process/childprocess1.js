
const { spawn } = require('node:child_process');
const ls = spawn('mkdir',['sss'],{ shell: true });

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});
ls.on('error',(code)=>
{
    console.log(code)
})
ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});




