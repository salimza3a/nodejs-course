const express = require("express");

const router = express.Router();

router.get("/users", (req, res, next) => {
  res.send(`<ul> <li><b>Salimza3a </b> </li>
    <li><b>Jack Dorsey </b> </li>
    <li><b>Brian Holt </b> </li>
    <li><b>Eric Elliot </b> </li> </ul>
    `);
});

router.post("/users-info", (req, res, next) => {
  console.log("my body", req.body);
  res.redirect("/users");
});

module.exports = router;
