const Product = require("../models/product");
const Card = require("../models/card");
exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/product-list", {
      prods: products,
      title: "All Products",
      path: "/products",
    });
  });
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId, (product) => {
    console.log(product, "single product");
    res.render("shop/product-detail", {
      path: "/products",
      title: "product" + prodId,
      singleProduct: product,
    });
  });
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/index", {
      prods: products,
      title: "Shop Index",
      path: "/",
    });
  });
};

exports.getCard = (req, res, next) => {
  res.render("shop/card", {
    title: "Card",
    path: "/card",
  });
};

exports.postCard = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, (product) => {
    Card.addProduct(prodId, product.price);
  });
  console.log("prodId", prodId);
  res.redirect("/card");
};

exports.getOrders = (req, res, next) => {
  res.render("shop/orders", {
    title: "Orders",
    path: "/orders",
  });
};

exports.getCheckout = (req, res, next) => {
  res.render("shop/checkout", {
    title: "Checkout",
    path: "/checkout",
  });
};
