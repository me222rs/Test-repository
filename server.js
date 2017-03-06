require("./libs/helper").initialize();
var bodyParser = require("body-parser");

//dfgdfgfghfgtghjbsdfsdfdfsfsdasvxvxvc
var express = require("express"),
    app = express(),
    port = 8080;

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  var server = app.listen(port, function() {
    console.log('Listening on port %d',port);
  });
