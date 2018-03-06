const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const MongoClient = require('mongodb').MongoClient
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://minna:passu@ds115768.mlab.com:15768/movies');


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(function(req,res,next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-type, Accept");
  next();
});

var routes = require('./api/routes/moviesRoutes');
routes(app);

app.set('view engine' , 'ejs');

app.set('port', (process.env.PORT || 3000));

app.use(express.static(__dirname + '/public'));


var db

MongoClient.connect('mongodb://minna:passu@ds115768.mlab.com:15768/movies', (err, client) => {
  if (err) return console.log(err)
  db = client.db('movies') // whatever your database name is
  app.listen(3000, () => {
    console.log('listening on 3000')
  })
});


app.get('/', (req, res) => {
  db.collection('quotes').find().toArray((err, result) => {
    if (err) return console.log(err)
    // renders index.ejs
    res.render('index.ejs', {quotes: result})
  })
});

app.post('/quotes', (req, res) => {
  db.collection('quotes').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
    res.redirect('/')
  })
});
