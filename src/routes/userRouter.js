const express=require('express')
const regRouter = require('./regRouter')
const regModel = require('../models/registerModel')
const userRouter=express.Router()




userRouter.get('/viewUser', async function (req, res){
    
    const userView=await regModel.find()
    console.log(userView)
    if(userView){
    res.status(200).json({
        success: true,
        error: false,
        message: 'success',
        userdetails :userView,
     }
 )
    }
})

userRouter.delete('/deleteUser/:id',async function(req,res){

    const deleteUser=await regModel.deleteOne({_id:req.params.id})
    
   try {
    if(deleteUser.deletedCount==1){
    res.status(200).json({
        success:true,
        error:false,
        message:'successfully deleted',
        userdetails:deleteUser
    })
}
    
   } catch (error) {
    res.status(400).json({
        success:false,
        error:true,
        message:'user not deleted',
        userdetails:deleteUser
    })
    
   }
})

userRouter.get('/singleuser/:id',async function(req,res){
    try {
        const singleUser=await regModel.findOne({
            _id:req.params.id
        })
        if(singleUser){
         return  res.status(200).json({
                success:true,
                error:false,
                message:'single user fetched',
                userdetails:singleUser
            })
        }
    } catch (error) {
        return  res.status(400).json({
            success:false,
            error:true,
            message:'something went wrong',
            
        })

        
    }
})

userRouter.put('/updateUser/:id',async function(req,res){
    try {
    console.log(req.params.id)

    console.log(req.body);

    const updateData={
        
        name:req.body.name,
        username:req.body.username,
        mobile:req.body.mobile,

    }

    const updateuser=await regModel.updateOne({_id:req.params.id},{$set:updateData}) 
        
  
    if(updateuser.modifiedCount==1){
    res.status(200).json({
        success:true,
        error:false,
        message:'successfully updated',
        userdetails:updateuser
    })
}
    
   } catch (error) {
    res.status(400).json({
        success:false,
        error:true,
        message:'user not updated',
        userdetails:deleteUser
    })
    
   }
})

module.exports=userRouter



