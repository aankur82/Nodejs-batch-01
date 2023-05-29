const EventEmitter=require('events');
var event=new EventEmitter();
//creating a named event
const name1=(a)=>{console.log(`event is fired ${a}`)}
event.on('name',name1)
event.on('name',()=>{console.log("second event is fired")})
event.on('set',()=>{console.log("set event is fired")})

//firing an event
event.emit('set')
//first argument is event name and others are parameters
// event.emit('name',"pawan")
// event.removeListener('name',name1)
// event.removeAllListeners('name')
event.prependOnceListener('name', ()=>{console.log("before")})
event.emit("name","sunil")
event.emit("name","sunil")

