const express = require("express");

const router = express.Router();

router.post("/users-data", (req, res, next) => {
  console.log("in post request");
  res.redirect("/users");
});

router.get("/", (req, res, next) => {
  res.send(`<h2> Hello dear </h2>`);
});

module.exports = router;
