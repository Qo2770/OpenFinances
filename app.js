// app.js
var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');

app = express();

app.use(serveStatic(__dirname + "/client/dist"));

app.use("/", (req, res) => {
  res.send(__dirname + "/client/dist/index.html");
})

var port = process.env.PORT || 3000;

app.listen(port);
console.log('server started '+ port);
