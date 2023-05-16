const jwt = require('jsonwebtoken')

const auth = async (req,res,next)=>{
    try {
        var token = req.headers.authorization.split(" ")[1]
        jwt.verify(token, 'loginUser');
        next();
    } catch (error) {
        res.status(500).json({message: "Authorization failed"})
    }
}
module.exports = auth;