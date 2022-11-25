const fs = require("fs");
const path = require("path");

const p = path.join(path.dirname(require.main.filename), "data", "card.json");

module.exports = class Card {
  static addProduct(id, productPrice) {
    // Fetch the previous card
    fs.readFile(p, (err, fileContent) => {
      let card = { products: [], totalPrice: 0 };
      if (!err) {
        card = JSON.parse(fileContent);
      }
      // Analyze the cart => Find existing product
      const existingProductIndex = card.products?.findIndex(
        (prod) => prod.id === id
      );
      const existingProduct = card.products[existingProductIndex];
      let updatedProduct;
      // Add new  product / increase quantity
      if (existingProduct) {
        updatedProduct = { ...existingProduct };
        updatedProduct.qty = updatedProduct.qty + 1;
        card.products = [...card.products];
        card.products[existingProductIndex] = updatedProduct;
      } else {
        updatedProduct = { id: id, qty: 1 };
        card.products = [...card.products, updatedProduct];
      }
      card.totalPrice = card.totalPrice + +productPrice;
      fs.writeFile(p, JSON.stringify(card), (err) => {});
    });
  }
};
