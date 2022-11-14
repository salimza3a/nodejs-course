const express = require("express");

const app = express();

const formRoute = require("./routes/form");

const mainRoute = require("./routes/main");

app.use(formRoute);

app.use(mainRoute);

app.use("/", (req, res, next) => {
  res.send(`<h2> Ooo Error ? </h2>`);
});
app.listen(3000);
