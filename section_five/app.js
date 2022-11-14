const express = require("express");
const adminData = require("./routes/admin");
const path = require("path");
const shopRoute = require("./routes/shop");
const app = express();

app.set("view engine", "pug");
app.set("views", "views");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/admin", adminData.routes);

app.use(shopRoute);
app.use("/", (req, res, next) => {
  res.render("404", { title: "Error Page " });
});

app.listen(3005);
