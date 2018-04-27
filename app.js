const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

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
            throw err;
        } else {
            res.status(200).json(
                product = product
            )
        }
    })
});

app.post('/', (req, res, next) => {
    console.log(req.body);
    const product = new Product({ name: req.body.name, brand: req.body.brand });
    product
        .save()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(next);
});

app.use((err, req, res, next) => {
    const status = err.status || 500;
    res.status(status).send();
    console.log(err.message);
})


module.exports = app;
