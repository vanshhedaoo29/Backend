const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("index");    // don't mention .ejs
});

app.get("/contact", function (req, res) {
    res.render("contact");    // don't mention .ejs
  });

app.listen(3001);
