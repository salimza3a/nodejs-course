const path = require("path");
const express = require("express");

const router = express.Router();

const usernames = [];
router.get("/users", (req, res, next) => {
  res.render("users", { title: "User Page", users: usernames, path: "/users" });
});

router.post("/users-info", (req, res, next) => {
  usernames.push(req.body.username);
  console.log(usernames, "usernames");
  console.log("my body", req.body);
  res.redirect("/users");
});

module.exports = router;
