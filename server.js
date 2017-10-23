// require all dependencies
var path = require("path");
var express = require('express');
var app = express();


app.locals.store = require('store')

app.use(express.static(__dirname + '/public'));

// set up the template engine
app.set('view engine', 'pug');
app.set("views", path.join(__dirname, "views"));

// GET response for '/'
app.get('/', function (req, res) {
    res.render('index');
});
app.get('/configurationList', function (req, res) {
    res.render('configurationList');
});
app.get('/evaluationList', function (req, res) {
    res.render('evaluationList');
});
app.get('/evaluationForm', function (req, res) {
    res.render('evaluationForm');
});
app.get('/gpsForm', function (req, res) {
    res.render('gpsForm');
});


// start up the server
app.listen(3000, function () {
    console.log('Listening on http://localhost:3000');
});