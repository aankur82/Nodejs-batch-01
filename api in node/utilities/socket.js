const socket=require('socket.io')
let io;
exports.socketConnect=(httpServer)=>{
    io=socket(httpServer,
        {
            cors: {
              origin: '*',
              methods: ["GET", "POST"],
              allowedHeaders: ["application/json"],
            }
          }
          );        
}
exports.getio=()=>{
    if(io){
        return io;
    }
    throw new Error('not connected');
}
