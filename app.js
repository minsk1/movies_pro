const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
var Movie = require('./api/models/moviesModel')

var app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://minna:passu@ds115768.mlab.com:15768/movies');

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var routes = require('./api/routes/movieRoutes'); //importing route
routes(app); //register the route

app.set('view engine', 'ejs');

// Set port
app.set('port', (process.env.PORT || 3000));

// Specify directory for static content
app.use(express.static(__dirname + '/public'));

// Index page
app.get('/', function(req, res) {
  res.render('index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
