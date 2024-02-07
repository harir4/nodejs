const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://harikrishnashivam:harikrishnashivam@cluster0.03b2lbz.mongodb.net/testDB?retryWrites=true&w=majority')

const schema = mongoose.Schema

const productSchema = new schema({
    name: { type: String },
    price: { type: String },
    description: { type: String },
    
})

const productModel = mongoose.model('product_tb',productSchema)

module.exports = productModel