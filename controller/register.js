const Register = require('../model/register')
const bcrypt = require('bcrypt');
const register = async (req,res)=>{
    try {
        const {name,email,password,confirmpassword} = req.body
        const olduser = await Register.findOne({email:email})
        if(olduser){
            res.status(500).json({message: "Email Already Exists"})
        } else{
            if(password == confirmpassword){
                bcrypt.hash(password, 10, async function(err, hash) {
                    if(err){
                        res.status(500).json(err)
                    } else{
                   const register = await Register.create({
                    name : name,
                    email : email,
                    password : hash
                   })
                   res.status(200).json(register)
                    }
                     
                });
            } else{
                res.status(500).json({message: "Confirm Password Does Not Matched"})
            }
        }
       
        
       
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const users = async (req,res)=>{
    try {
        const getUsers = await Register.find({})
        res.status(200).json(getUsers)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}


module.exports =  {register ,users}