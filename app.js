console.log(module);

var express = require('express');
var app = express();
//var serve = require('http').Server('app');
var path = require('path')

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
app.get('/new', function(req, res) {
    res.sendFile(__dirname + '/client/newgame.html');
});
app.get('/map', function(req, res) {
    res.sendFile(__dirname + '/client/map.html');
});

var tools = require('./oauth')
app.get('/request', function(req, res){
   
    var request = tools.getUrl
    console.log(request())
    res.send(request); // try res.json() if getList() returns an object or array
}); 

app.use('client',express.static(__dirname + '/client'));

app.use(express.static(path.join(__dirname, 'public')));

//Heroku
app.listen(process.env.PORT || 3000);
