const mongoose = require('mongoose')
const registerSchema = mongoose.Schema({
    name :{
        type : String,
        required: true,
        },
    email :{
        type : String,
        required: true,
        unique: true
        },
    password : {
        type : String,
        required: true,
        }
    
},
{
    timestamps: true
})
const Register = mongoose.model('Register', registerSchema);

module.exports = Register;