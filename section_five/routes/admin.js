const express = require("express");
const path = require("path");
const router = express.Router();

const products = [];

const rootDir = require("../util/path");
router.get("/add-product", (req, res, next) => {
  // res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
  res.render("add-product", {
    title: "Add Product Page",
    path: "/admin/add-product",
  });
});
router.post("/add-product", (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
