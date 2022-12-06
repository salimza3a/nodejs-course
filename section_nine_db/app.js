const express = require("express");
const adminRoutes = require("./routes/admin");
const path = require("path");
const shopRoute = require("./routes/shop");
const app = express();

const errorController = require("./controllers/error");

app.set("view engine", "pug");
app.set("views", "views");

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/admin", adminRoutes);

app.use(shopRoute);
app.use("/", errorController.get404);

app.listen(3000);
