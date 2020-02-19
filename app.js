console.log("Sean Larson");
console.log("Bobby Ludwick");
console.log("Ian Davis")
console.log("Griffin Bortnick")

var express = require('express');
var app = express();
var serve = require('http').Server('app');

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/client/index.html');
});
app.use('client',express.static(__dirname + '/client'));

//Heroku
//app.listen(process.env.PORT);
//Local
app.listen(3000);
