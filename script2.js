const express = require("express");
const app = express();

app.set("view engine", "ejs"); 
app.use(express.static('./public'));

app.get("/", function (req, res) {
    throw Error("Pata nahi bhai");    
});

app.get("/error", function (req, res, next) {
    throw Error("Something went wrong");    
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
