const express = require("express");
const adminData = require("./routes/admin");
const path = require("path");
const shopRoute = require("./routes/shop");

// const expressHbs = require("express-handlebars");
const app = express();

// app.engine(
//   "hbs",
//   expressHbs({
//     layoutsDir: "views/layouts",
//     defaultLayout: "main-layout",
//     extname: "hbs",
//   })
// );

// app.set("view engine", "hbs");
app.set("view engine", "ejs");
app.set("views", "views");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/admin", adminData.routes);

app.use(shopRoute);
app.use("/", (req, res, next) => {
  res.render("404", { title: "Error Page " });
});

app.listen(3013);
