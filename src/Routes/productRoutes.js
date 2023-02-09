// const express = require('express');
// const router = express.Router();
// const { Products } = require('../modules/Products/products');

// router.get('/products_by_id', (req, res) => {
//     let type = req.query.type
//     let productIds = req.query.id

//     if (type === "array") {

//     }

//     //we need to find the product information that belong to product Id

//     Products.find({ '_id': { $in: productIds } })
//         .populate('writer')
//         .exec((err, product) => {
//             if (err) return req.status(400).send(err)
//             return res.status(200).send(product)
//         })
// });