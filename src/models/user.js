const mongoose = require('mongoose');
const validator = require('validator')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({

    name:{
        type: String,
        required:true,
        trim: true

    },
    email:{
        type:String,
        trim:true,
        lowercase:true,
        required:true,
        validate(value){
            if(!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    age :{
        default:0,
        type: Number,
        validate(number) {
            if(number < 0){
                throw new Error('Age must be positive')
            }
        }
    },
    password : {
        type: String,
        trim:true,
        required:true,
        minlength: 7,
        validate(str){
            if(str.includes('password')){
                throw new Error('password string found')
            }
        }


    }
})

userSchema.pre('save', async function(next) {

    const user = this

    if(user.isModified('password')) {
        user.password = await bcrypt.hash(user.password,8)
    }

    console.log('beforre saving')

    next()

})

const User = mongoose.model('User',userSchema)

module.exports = User