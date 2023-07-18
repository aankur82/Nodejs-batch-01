const mongoose = require('mongoose')

const connect = () => {
    mongoose.connect('mongodb+srv://classnotes9610:UsZ1Dz3XedlDBm7g@cluster0.jgxpksk.mongodb.net/?retryWrites=true&w=majority')
        .then((res) => {
            // console.log(res)
        })
        .catch(err => console.log(err))
}

module.exports=connect;