const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://harikrishnashivam:harikrishnashivam@cluster0.03b2lbz.mongodb.net/testDB?retryWrites=true&w=majority')

const schema = mongoose.Schema

const registerSchema = new schema({
    username: { type: String },
    password: { type: String },
    name: { type: String },
    mobile: { type: String },
})

const regModel = mongoose.model('register_tb',registerSchema)

module.exports = regModel