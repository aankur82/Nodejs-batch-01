const dbclient=require('../index')



const Insert= async (data)=>{
    await dbclient.collection('detail').insertOne(data)
    .then((res)=>{})
    .catch(err=>console.log(err))
}

Insert({name:'abhishek'})





exports.insert=Insert;