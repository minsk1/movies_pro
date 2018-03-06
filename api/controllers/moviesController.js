'use strict';

var mongoose = require('mongoose'),
  Movie = mongoose.model('Movies');

exports.list_all_movies = function(req, res) {
  Movie.find({}, function(err, movie) {
    if (err)
      res.send(err);
    res.json(movie[0]);
  });
};

exports.read_a_movie = function(req, res) {
  Movie.find({}, function(err, game) {
    if (err) {
      res.send(err);
    }
    for (var i = 0; i < movie[0].movies.length; i++) {
      if(movie[0].movies[i].name.toLowerCase() == req.params.movieName) {
        res.json(movies[0].movies[i]);
      }
    }
  });
};
