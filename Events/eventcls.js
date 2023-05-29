const EventEmitter=require('node:events');
var event=new EventEmitter();
event.on('name',()=>{console.log("second event is fired")})
event.on('set',()=>{console.log("set event is fired")})

class sample extends EventEmitter{
    constructor()
    {
        super()
    }
    // on('data',()=>{console.log("data event is fired")})
   
    show()
    {
        event.emit('name')
    }
}
const sample1=new sample()
sample1.show()