const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  res.render("admin/add-product", {
    title: "Add Product Page",
    path: "/admin/add-product",
  });
};

exports.postAddProduct = (req, res, next) => {
  const { title, description, price, imageUrl } = req.body;
  const product = new Product(title, imageUrl, description, price);
  product.save();
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("admin/products", {
      prods: products,
      title: "All Products",
      path: "/admin/products",
    });
  });
};
