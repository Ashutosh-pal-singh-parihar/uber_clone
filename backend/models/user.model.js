const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const userSchema = new mongoose.Schema({
    fullname : {
            firstname :{
                type : String,
                required : true,
                minlength : [3,'min length of first name should be three ']
            },
            lastname : {
                type : String,
                minlength : [3,'min length for last name should be three'] 
            }
    },
    email : {
        type : String,
        required : true,
        unique : true,
        minlength : [5,'min length of email should be 5 ']
    },
    password : {
        type : String,
        required : true,
        select : false

    },
    sockedId: { // we'll use it to track the location
        type : String,
    }
},{ timestamps : true})


userSchema.methods.generateAuthToken = function (){
    const token = jwt.sign({ _id : this._id }, process.env.JWT_SECRET, {expiresIn : '24h'})
    return token

}

userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password)
}

userSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password , 10)
}

const userModel = mongoose.model('User',userSchema)

module.exports = userModel