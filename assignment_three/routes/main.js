const express = require("express");

const router = express.Router();

router.get("/users", (req, res, next) => {
  res.send(`<ul> <li> hello </li>`);
});

module.exports = router;
