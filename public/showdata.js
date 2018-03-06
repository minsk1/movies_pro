var movies = [];

$(document).ready(function(){
  getData();
})

function getData() {
  $.getJSON('/movies', function (data){
    movies.push(data.movies);
    createColumns();
  });
}

function createColumns(){
  var col = "";
  for (var i = 0; i < movies[0].length; i++){
    col += "<div class='col-sm-12' id='col" + movies[0][i].id + "'>" +
    createInfo(movies[0][i]) + "</div>";
  }
  $("#row").html(col);
  for (var i = 0; i < movies[0].length; i++){
    console.log(movies[0][i].image);
    $("#col" + movies[0][i].id).css("background-image", "url('./images/" + movies[0][i].image + "')");

  }
}

function createInfo(movie) {
  var info = '<ul class="list-group">'+
    '<li class="list-group-flush"><h1>' + movie.name + '</h1></li><br>'+
    '<li class="list-group-flush">' + movie.summary + '</li><br>'+
    '<li class="list-group-flush"><iframe width="420" height="315" src="' + movie.trailer + '"></iframe></li>'+
    '</ul>';
    return info;
}
