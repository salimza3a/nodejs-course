const express = require("express");

const router = express.Router();

const rootDir = require("../utils/path");
const path = require("path");
router.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "main.html"));
});

module.exports = router;
