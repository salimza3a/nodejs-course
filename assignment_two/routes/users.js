const express = require("express");

const router = express.Router();

const path = require("path");

const rootDir = require("../utils/path");
router.get("/add-users", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "user-product.html"));
});

router.post("/users", (req, res, next) => {
  console.log(req.body, "request's body");
  res.redirect("/");
});

module.exports = router;
