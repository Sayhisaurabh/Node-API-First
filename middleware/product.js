const productMiddleware = async(req,res,next)=>{
    try {
        const login = 'yes';
        if(login =='yes'){
            next();
        }else{
            res.status(500).json({message: "please login"}) 
        }
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
module.exports = productMiddleware;