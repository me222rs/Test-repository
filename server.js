require("./libs/helper").initialize();
var bodyParser = require("body-parser");
var User = require("./user.js");

//dfgdfgfghfgtghjbsdfsdfdfsfsdasvxvxvc
var express = require("express"),
    app = express(),
    port = 8080;

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  var server = app.listen(port, function() {
    var user = User({
      username: "test",
      email:"hej@google.com",

    });
    user.save().then(function()
  {
    console.log("successful");
  }).catch(function(err)
{
  console.log(err);
});
    console.log('Listening on port %d',port);
  });
