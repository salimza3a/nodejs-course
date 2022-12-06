const Product = require("../models/product");
const Card = require("../models/card");
exports.getProducts = (req, res, next) => {
  Product.fetchAll()
    .then(([firstEl, secondEl]) => {
      res.render("shop/product-list", {
        prods: firstEl,
        title: "All Products",
        path: "/products",
      });
    })
    .catch((err) => console.log(err, "err in shop"));
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId)
    .then(([product]) => {
      console.log(product, "product");
      res.render("shop/product-detail", {
        path: "/products",
        title: "product" + prodId,
        singleProduct: product[0],
      });
    })
    .catch((err) => console.log("err in shop"));
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll()
    .then(([firstEl, secondEl]) => {
      res.render("shop/index", {
        prods: firstEl,
        title: "Shop Index",
        path: "/",
      });
    })
    .catch((err) => console.log(err));
};

exports.getCard = (req, res, next) => {
  Card.getCard((card) => {
    Product.fetchAll((products) => {
      const cardProducts = [];
      for (product of products) {
        const cardProductData = card.products.find(
          (prod) => prod.id === product.id
        );
        if (cardProductData) {
          cardProducts.push({ productData: product, qty: cardProductData.qty });
        }
      }
      res.render("shop/card", {
        title: "Card",
        path: "/card",
        products: cardProducts,
      });
    });
  });
};

exports.postCard = (req, res, next) => {
  const prodId = req.body.productId;

  Product.findById(prodId, (product) => {
    Card.addProduct(prodId, product.price);
    res.redirect("/card");
  });
};

exports.postCardDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  console.log(req.body, "product id from ");
  Product.findById((prodId, product) => {
    Card.deleteProduct(prodId, product.price);
    res.redirect("/card");
  });
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
