
const mongoose = require('mongoose')

const lessonsSchemas = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        maxlength:50,
        minlength:2
    },
    course:{
        type: String,
        required:true,
    },
    lessons:{
        type: String,
        required: true,
    },
    mentors: {
        type: String,
        required : true
    }

})

module.exports = mongoose.model('lessons', lessonsSchemas)