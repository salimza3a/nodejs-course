const express = require("express");

const path = require("path");
const app = express();

const bodyParser = require("body-parser");

app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({ extended: false }));
const usersRouter = require("./routes/users");

const mainRouter = require("./routes/main");

app.use(usersRouter);

app.use(mainRouter);

app.use("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "views", "404.html"));
});
app.listen(3000);
