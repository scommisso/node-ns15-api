'use strict';

var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

// TODO: Add widget routes
var widgets = require('ns15-widgets');

// TODO: Add sprocket routes
var sprockets = require('ns15-sprockets');

var server = app.listen(3000, function () {
  var port = server.address().port;
  console.log('Example app listening at http://127.0.0.1:%s', port);
});
