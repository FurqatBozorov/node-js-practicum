const express = require('express');
const router = express.Router();

const productsData = require('./add-product')


router.get('/',(req,res)=>{
    console.log(productsData.products);
    res.render('shop');
})

module.exports = router;