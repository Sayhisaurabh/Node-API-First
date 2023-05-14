const Product = require('../model/ProductModel');
//add products

const addproduct = async (req,res)=>{
   try{
    const isFilled = await Product.findOne({name:req.body.name});
    if(isFilled){
        res.status(500).json({message: "Product Already Exists"}) 
    }else{
        const add = await Product.create(req.body)
        res.status(201).json({message:"Product Added",result:add})
    }

   } 
   catch(error){
    res.status(500).json({message: error.message})
   }

}


//get all products
const allProducts = async(req, res) =>{
    try {
        const product = await Product.find({}).populate('cat_id');
        res.status(200).json(product);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
}
// get single product
const singleProduct = async (req, res) => {
    try {
      const {id} = req.params;
      const product = await Product.findById(id).populate('cat_id');
      res.status(200).json(product);
      
  } catch (error) {
      console.log(error.message);
      res.status(500).json({message: error.message})
  }
  }

//update product
const updateProduct = async (req, res) => {
    try {
      const {id} = req.params;
      const product = await Product.findByIdAndUpdate(id,req.body,{new:true})
      res.status(200).json(product);
      
  } catch (error) {
      console.log(error.message);
      res.status(500).json({message: error.message})
  }
  }
//delete product
const deleteProduct =  async (req, res) => {
    try {
      const {id} = req.params;
      const product = await Product.findByIdAndDelete(id)
      res.status(200).json(product);
      
  } catch (error) {
      console.log(error.message);
      res.status(500).json({message: error.message})
  }
  }

module.exports = { allProducts,singleProduct,updateProduct,deleteProduct,addproduct }