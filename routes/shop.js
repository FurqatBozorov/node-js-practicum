const express = require("express");
const router = express.Router();

const productsData = require("../controllers/products");

router.get("/", (req, res) => {
  res.render("shop/index");
});
router.get("/products", (req, res) => {
  res.render("shop/product-list", { prod: productsData.products });
});
router.get("/cart", (req, res) => {
  res.render("shop/cart");
});
router.get("/checkout", (req, res) => {
  res.render("shop/checkout");
});

module.exports = router;
