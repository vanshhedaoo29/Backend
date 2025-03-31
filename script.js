const express = require('express')
const app = express();


app.use(function(req, res, next){
    console.log('Hello from Middleware');   // Middleware
    next();
})

app.use(function(req, res, next){
    console.log('Hello from Middleware 2');
    next();
})

app.get('/', function (req, res) {
  res.send('Vansh Hedaoo')
})

app.get('/profile', function (req, res) {
    res.send('Vansh Hedaoo from Profile')
  })

  app.get('/login', function (req, res) {
    res.send('Vansh Hedaoo from Login Page')
  })

app.listen(3000)