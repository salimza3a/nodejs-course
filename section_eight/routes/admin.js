const express = require("express");
const path = require("path");
const router = express.Router();
const adminController = require("../controllers/admin");

const rootDir = require("../util/path");
router.get("/add-product", adminController.getAddProduct);

router.post("/add-product", adminController.postAddProduct);

router.get("/products", adminController.getProducts);

router.get("/edit-product/:productId", adminController.getEditProduct);

router.post("/edit-product", adminController.postEditProduct);

module.exports = router;
