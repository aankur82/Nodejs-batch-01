
const mongodb=require('mongodb');
const mongoClient=mongodb.MongoClient


// mongoClient.connect('mongodb+srv://classnotes9610:UsZ1Dz3XedlDBm7g@cluster0.jgxpksk.mongodb.net/?retryWrites=true&w=majority')
// .then((client)=>{
//     // console.log(client)
//     client.db('test').collection('detail').insertOne({name:'manish jangid'})
//     .then((result)=>console.log(result))
//     .catch((err)=>{console.log(err)})
// })
// .catch((err)=>console.log(err))


let dbclient;
let dbconnection;
const connection=()=>{
    mongoClient.connect('mongodb+srv://classnotes9610:UsZ1Dz3XedlDBm7g@cluster0.jgxpksk.mongodb.net/?retryWrites=true&w=majority')
    .then((client)=>{
        // console.log(client)
        
        // dbclient=client.db('test')
        dbconnection=client.db('test');
    })
    .catch((err)=>console.log(err))
}
connection();
const getDb=async ()=>{
   try {
    if(dbconnection){
       return await  dbconnection;
    }
   } catch (error) {
    throw error
   } 
        
}
console.log(getDb())
module.exports=getDb;


// const {insert}=require('./models/crud')
// insert({name:'abhishek'})



