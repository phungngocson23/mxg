const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: { type: String, require: true, unique: true },
    brand: String
}, { versionKey: false });

const Product = module.exports = mongoose.model('Product', productSchema, 'product');