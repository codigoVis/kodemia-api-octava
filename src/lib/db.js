
const mongoose = require('mongoose')


function connect(){
    return mongoose.connect('mongodb+srv://vicente:kodemia@octava.mirrn.mongodb.net/kodemia',
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    }
  ) 
}

module.exports = connect