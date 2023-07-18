
const mongodb=require('mongodb');
const mongoClient=mongodb.MongoClient


const connection=(cb)=>{
    mongoClient.connect('mongodb+srv://classnotes9610:UsZ1Dz3XedlDBm7g@cluster0.jgxpksk.mongodb.net/?retryWrites=true&w=majority')
    .then((client)=>{
        
        cb(client.db('shop'))
        
    })
    .catch((err)=>console.log(err))
}
module.exports=connection;