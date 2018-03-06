'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MovieSchema = new Schema(
  {
  movies: [{
    id: Number,
    name: String,
    summary: String,
    trailer: String,
    image: String
  }]
}, { collection: 'movies' });

module.exports = mongoose.model('Movies', MovieSchema);
