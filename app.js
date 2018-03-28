// app.js
var express = require('express');
var path = require('path');

app = express();

app.use(express.static(__dirname + "/client/dist"));

app.use("/", (req, res) => {
  res.render('index');
})

var port = process.env.PORT || 3000;

app.listen(port);
console.log('server started '+ port);
