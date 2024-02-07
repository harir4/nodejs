const express = require('express')

const regModel = require('../models/registerModel')
const loginRouter = express.Router()


loginRouter.post('/', async function (req, res) {

    try {
        const login = await regModel.findOne({ username: req.body.username })
        if (!login) {
            return res.status(400).json({
                success: false,
                error: true,
                message: 'username not exist',
            })
        }
        if(login.password==req.body.password){
            return res.status(200).json({
                success:true,
                error:false,
                message:'logged in',
                id:login.id
            }) }
        else{
            return res.status(400).json({
                success: false,
                error: true,
                message: 'password mismatch',
            })}
        } catch (error) {
        return res.status(400).json({
            success: false,
            error: true,
            message: 'something went wrong',
        }) }
})
module.exports=loginRouter




