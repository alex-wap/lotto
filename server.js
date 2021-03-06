var express = require("express");
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.set('json spaces', 4);

var routes_setter = require('./server/config/routes.js');
routes_setter(app)
app.listen(8000, function() {
  console.log("listening on port 8000");
})