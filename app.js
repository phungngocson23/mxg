const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/mxg');
const db = mongoose.connection;

db.once('open', () => {
    console.log('Connected Sucessfully !');
})
db.on('error', (err) => {
    console.log(err);
})

const Product = require('./api/models/product');

app.get('/', (req, res) => {
    Product.find({}, (err, product) => {
        if (err) {
            console.log("Failed");
        } else {
            console.log(product);
        }
    })
});

module.exports = app;
