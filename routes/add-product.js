const express = require('express');
const router = express.Router();

const products = [];

router.get('/add-product',(req,res)=>{
    res.render('add-product');
})

router.post('/add-product',(req,res)=>{
    products.push(req.body)
    res.redirect('/');
})

exports.routes = router;
exports.products = products;