const express = require('express')
const router = new express.Router();
const Category = require('../model/CategoryModel')
//add
router.post('/category', async (req,res)=>{
try{
    const category = await Category.create(req.body)
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