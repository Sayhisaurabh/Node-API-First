const Register = require('../model/register')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const loginController = async (req,res)=>{
    try {
        const {email,password} = req.body
        const user = await Register.findOne({email:email})
        if(user){
            bcrypt.compare(password, user.password, async function(err, result) {
                 if(err){
                    res.status(500).json(err)
                 } else{
                   if(result){
                  const token =   jwt.sign({id:user.id}, 'loginUser', {expiresIn : "2h"})
                  res.status(200).json({message: "User login Successfull",token:token})
                   } else{
                    res.status(500).json({message: "Wrong details"})
                   }
                    
                 }
            });
        }else{
            res.status(500).json({message: "User Not Found"})
        }

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
module.exports = loginController