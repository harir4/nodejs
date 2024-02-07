const express=require('express')
const regModel = require('../models/registerModel')

const regRouter=express.Router()
regRouter.post('/registration',async function (req, res) {
    try {
 const formDats = {
            username:req.body.username,
            password:req.body.password,
            name:req.body.name,
            mobile:req.body.phone,
        }
         const oldUser = await regModel.findOne({username:req.body.username})
if(oldUser){
            return res.status(400).json({
                success:false,
                error:true,
                message:'username already exists',
            })
        }
        const oldMobile=await regModel.findOne({mobile:req.body.phone})
        if(oldMobile){
            return res.status(400).json({
                success:false,
                error:true,
                message:'phoneno already exists',
            })

        }
const saveData = await regModel(formDats).save()
if(saveData){
           return res.status(200).json({
                success:true,
                error:false,
                message:'Registration Completed',
                userdetails:saveData
            })
        }else{
           return res.status(400).json({
                success:false,
                error:true,
                message:'some error',
            })
        }
         } catch (error) {
        return res.status(400).json({
            success:false,
            error:true,
            message:'something went wrong',
        })
    }})
module.exports=regRouter//exports router to serverpage to use