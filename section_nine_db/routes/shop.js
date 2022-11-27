const express = require("express");
const path = require("path");
const router = express.Router();
const shopController = require("../controllers/shop");
router.get("/", shopController.getIndex);

router.get("/products", shopController.getProducts);

// router.get('/products/delete')  is importand order of routers

router.get("/products/:productId", shopController.getProduct);

router.get("/card", shopController.getCard);

router.post("/card", shopController.postCard);

router.post("/card-delete-item", shopController.postCardDeleteProduct);

router.get("/checkout", shopController.getCheckout);

router.get("/orders", shopController.getOrders);
module.exports = router;
