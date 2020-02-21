console.log(module);

var express = require('express');
var app = express();
var serve = require('http').Server('app');

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/client/index.html');
});
app.get('/home', function(req, res) {
    res.sendFile(__dirname + '/client/index.html');
});
app.get('/news', function(req, res) {
    res.sendFile(__dirname + '/client/news.html');
});
app.get('/about', function(req, res) {
    res.sendFile(__dirname + '/client/about.html');
});
app.get('/test', function(req, res) {
    res.sendFile(__dirname + '/client/test.html');
});
app.get('/navbar', function(req, res) {
    res.sendFile(__dirname + '/client/navbar.html');
});
app.use('client',express.static(__dirname + '/client'));

//Heroku
app.listen(process.env.PORT || 3000);
//local
//app.listen(3000);