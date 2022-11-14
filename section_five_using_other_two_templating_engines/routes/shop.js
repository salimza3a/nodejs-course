const express = require("express");
const path = require("path");
const router = express.Router();
const rootDir = require("../util/path");

const adminData = require("./admin");
// "/views/shop.html" path is correct but absolute path now refers to os not project directory
router.get("/", (req, res, next) => {
  const products = adminData.products;
  res.render("shop", {
    prods: products,
    title: "Shop",
    path: "/",
    hasProducts: products.length > 0 ?? false,
    activeShop: true,
    productCSS: true,
  });
});

module.exports = router;
