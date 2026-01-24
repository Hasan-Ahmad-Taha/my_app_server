const express = require("express");
const { createProduct } = require("../controllers/product.controller");
const productRout = express.Router();
productRout.post("/createProduct", createProduct)
module.exports = productRout;