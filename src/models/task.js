const mongoose = require('mongoose');
const validator = require('validator')

const Task = mongoose.model('Task',{

    description:{
        type: String,
        trim: true
    },
    completed : {
        default:false,
        type:Boolean
    }
})

module.exports = Task