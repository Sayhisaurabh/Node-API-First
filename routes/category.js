const express = require('express')
const router = new express.Router();
const multer  = require('multer')
const Category = require('../model/CategoryModel')
//add
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null,file.originalname ) 
    }
  })
  
  const upload = multer({ storage: storage })
router.post('/category', upload.single('image'), async (req,res)=>{
try{
    // res.status(201).json(req.file)
    const category = await Category.create({
        name : req.body.name,
        image : req.file.filename
    })
    res.status(201).json(category)
} 
catch(error){
    res.status(500).json({message: error.message})
}
})
//fetch
router.get('/category', async (req,res)=>{
    try{
        const categories = await Category.find({})
        res.status(201).json(categories)
    } 
    catch(error){
        res.status(500).json({message: error.message})
    }
    })
    //fetch Single
router.get('/category/:id', async (req,res)=>{
    try{
        const {id} = req.params;
        const singleCateogory = await Category.findById(id)
        res.status(201).json(singleCateogory)
    } 
    catch(error){
        res.status(500).json({message: error.message})
    }
    })
    //update
router.patch('/category/:id', async (req,res)=>{
    try{
        const {id} = req.params;
        const updateCategory = await Category.findByIdAndUpdate(id,req.body,{new:true})
        res.status(201).json(updateCategory)
    } 
    catch(error){
        res.status(500).json({message: error.message})
    }
    })
    // delete
    router.delete('/category/:id', async (req,res)=>{
        try{
            const {id} = req.params;
            const deleteCategory = await Category.findByIdAndDelete(id)
            res.status(201).json(deleteCategory)
        } 
        catch(error){
            res.status(500).json({message: error.message})
        }
        })
module.exports = router;