'use strict';
module.exports = function(app) {
  var moviesList = require('../controllers/moviesController');

  // todoList Routes
  app.route('/movies')
    .get(moviesList.list_all_movies);
    //.post(todoList.create_a_task);


  app.route('/movies/:movieName')
    .get(moviesList.read_a_movie);
    //.put(todoList.update_a_task)
    //.delete(todoList.delete_a_task);
};
