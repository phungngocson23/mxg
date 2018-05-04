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
    const product = new Product({ name: req.body.name, brand: req.body.brand });
    product
        .save()
        .then(data => {
            res.status(201).json(data)
        })
        .catch(err => {
            console.log(err);
        });
});

// app.use((req, res, next) => {
//     const error = new Error("Not found");
//     error.status = 404;
//     next(error);
// });

// app.use((err, req, res, next) => {
//     const status = err.status || 500;
//     console.log(status);
//     res.status(status).json({
//         code: status,
//         message: err.message
//     });
// })

module.exports = app;
