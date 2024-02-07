const express=require('express')
const productModel = require('../models/productModel')
const productRouter=express.Router()
module.exports=productRouter
productRouter.get ('/products',async function(req,res){

    try {
        const productData={
            name:req.query.name,
            price:req.query.price,
            description:req.query.description,}
            const oldName=await productModel.findOne({name:req.query.name})
            if(oldName){
                return res.status(400).json({
                    success:false,
                    error:true,
                    message:'name already exists',
                })


            }

        const saveData = await productModel(productData).save()
        if(saveData){
            if(saveData){
                return res.status(200).json({
                     success:true,
                     error:false,
                     message:'product added',
                     userdetails:saveData
                 })
             }else{
                return res.status(400).json({
                     success:false,
                     error:true,
                     message:'some error',
                 })
             }

        }

      console.log(productData);
        
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            success:false,
            error:true,
            message:'something went wrong',
        })
        
    }

 

})      