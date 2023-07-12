const getDb=require('../index')

const db=getDb();
console.log(db)

// const Insert= async (data)=>{
//     console.log(db)
//     // db.collection('detail').insertOne(data)
//     // .then((res)=>{
//     //     console.log(res)
//     // })
//     // .catch(err=>console.log(err))
// }

// Insert({name:'pankaj'})





// exports.insert=Insert;