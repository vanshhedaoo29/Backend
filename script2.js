const express = require("express");
const app = express();

app.set("view engine", "ejs"); 
app.use(express.static('./public'));

app.get("/", function (req, res) {
    throw Error("Pata nahi bhai");    // don't mention .ejs
});

app.get("/error", function (req, res, next) {
    throw Error("Something went wrong");    // don't mention .ejs
  });

app.get("/contact", function (req, res) {
    res.render("contact", {name: "Vansh"});    // don't mention .ejs
  });

app.use(function errorHandler (err, req, res, next) {
    if (res.headersSent) {
      return next(err)
    }
    res.status(500)
    res.render('error', { error: err })
  });  

app.listen(3001);
