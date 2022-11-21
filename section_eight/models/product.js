const fs = require("fs");

const path = require("path");
const p = path.join(
  path.dirname(require.main.filename),
  "data",
  "products.json"
);
const getProductsFromFile = (callback) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      callback([]);
    } else {
      callback(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    this.id = Math.floor(Math.random() * 123).toString();
    getProductsFromFile((products) => {
      products.push(this);
      console.log(JSON.stringify(products), "products");
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log("write file error");
      });
    });
  }
  static fetchAll(callback) {
    getProductsFromFile(callback);
  }

  static findById(id, callback) {
    getProductsFromFile((products) => {
      const product = products.find((item) => item.id === id);
      callback(product);
    });
  }
};
