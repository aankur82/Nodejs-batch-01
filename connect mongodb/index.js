
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
const connection=(cb)=>{
    mongoClient.connect('mongodb+srv://classnotes9610:UsZ1Dz3XedlDBm7g@cluster0.jgxpksk.mongodb.net/?retryWrites=true&w=majority')
    .then((client)=>{
        // console.log(client)
        
        // dbclient=client.db('test')
        cb(client.db('test'))
    })
    .catch((err)=>console.log(err))
}
connection((res)=>{
    dbclient=res;
    console.log(dbclient)
    dbclient.collection('detail').insertOne({name:'abhishek'})
    .then((res)=>{})
    .catch(err=>console.log(err))
})
module.exports=dbclient;


// const {insert}=require('./models/crud')
// insert({name:'abhishek'})



