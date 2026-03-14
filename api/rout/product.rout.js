const express = require("express");
const { createProduct, findAllProduct, deleteProduct } = require("../controllers/product.controller");
const productRout = express.Router();
productRout.post("/createProduct", createProduct)
productRout.post("/findAllProduct", findAllProduct)
productRout.delete("/deleteProduct/:id", deleteProduct);
module.exports = productRout;