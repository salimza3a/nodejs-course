const express = require("express");

const path = require("path");
const app = express();

const userRouter = require("./routers/user");

const mainRouter = require("./routers/main");

app.use(express.json());

app.use(express.urlencoded());

app.use(express.static(path.join(__dirname, "public")));
app.use(userRouter);

app.use(mainRouter);

app.use("/", (req, res, next) => {
  res.send(`<h2> Hmm looks like an Error </h2>`);
});
app.listen(3000);
