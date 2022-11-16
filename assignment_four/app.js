const express = require("express");

const path = require("path");
const app = express();

const userRouter = require("./routers/user");

const mainRouter = require("./routers/main");

app.set("view engine", "pug");
app.set("views", "./views");

app.use(express.json());

app.use(express.urlencoded());

app.use(express.static(path.join(__dirname, "public")));
app.use(userRouter);

app.use(mainRouter);

app.use("/", (req, res, next) => {
  res.render("404", { title: "Error Page" });
});
app.listen(3000);
