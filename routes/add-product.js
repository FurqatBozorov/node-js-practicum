const express = require("express");
const router = express.Router();

const productControllers = require("../controllers/products");

router.get("/add-product", productControllers.getAddProduct);
router.get("/products", productControllers.getProducts);
router.get("/edit-product", productControllers.getEditProduct);

router.post("/add-product", productControllers.addNewProduct);

exports.routes = router;
