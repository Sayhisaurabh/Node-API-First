const express = require('express');
const router = new express.Router();
const multer  = require('multer')
const { addproduct , allProducts,singleProduct,updateProduct,deleteProduct } = require('../controller/product');
const productMiddleware = require('../middleware/product')
const auth = require('../middleware/auth')
// router.use(auth); //for All  route
// router.get('/product',productMiddleware,allProducts); //for single route
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null,uniqueSuffix+"-"+file.originalname ) 
    }
  })
  
  const upload = multer({ storage: storage })
router.route('/product').get(auth,allProducts);
router.route('/product').post(upload.single('image'),auth,addproduct);
router.route('/product/:id').get(singleProduct);
router.route('/product/:id').patch(updateProduct);
router.route('/product/:id').delete(deleteProduct);

// router.post('/product', async (req, res) => {
//   try {
//     const product = await Product.create(req.body)
//     res.status(200).json(product);
    
// } catch (error) {
//     console.log(error.message);
//     res.status(500).json({message: error.message})
// }
// })

// router.get('/products', async (req, res) => {
//   try {
//     const products = await Product.find({}).sort({"quantity":1})
//     res.status(200).json(products);
    
// } catch (error) {
//     console.log(error.message);
//     res.status(500).json({message: error.message})
// }
// })

// router.get('/product/:id', async (req, res) => {
//   try {
//     const {id} = req.params;
//     const product = await Product.findById(id)
//     res.status(200).json(product);
    
// } catch (error) {
//     console.log(error.message);
//     res.status(500).json({message: error.message})
// }
// })


// router.patch('/product/:id', async (req, res) => {
//   try {
//     const {id} = req.params;
//     const product = await Product.findByIdAndUpdate(id,req.body,{new:true})
//     res.status(200).json(product);
    
// } catch (error) {
//     console.log(error.message);
//     res.status(500).json({message: error.message})
// }
// })

// router.delete('/product/:id', async (req, res) => {
//   try {
//     const {id} = req.params;
//     const product = await Product.findByIdAndDelete(id)
//     res.status(200).json(product);
    
// } catch (error) {
//     console.log(error.message);
//     res.status(500).json({message: error.message})
// }
// })


module.exports = router;