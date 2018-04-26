const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name : String,
    brand : String
});

const Product = module.exports = mongoose.model('Product', productSchema, 'product');