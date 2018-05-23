const movieOutputDiv = $('#movies');

const domString = (movieArray) => {
  let movieStrang = '';
  movieArray.forEach((movie) => {
    movieStrang += `<div class="col-sm-6 col-md-4">`;
    movieStrang += `<div class="thumbnail">`;
    movieStrang +=  ` <img src="..." alt="...">`;
    movieStrang += `<div class="caption">`;
    movieStrang += `<h3>${movie.original_title}</h3>`;
    movieStrang += `<p>${movie.overview}</p>`;
    movieStrang += `<p><a href="#" class="btn btn-primary" role="button">Review</a> <a href="#" class="btn btn-default" role="button">Wishlist</a></p>`;
    movieStrang += `</div>`;
    movieStrang +=  `</div>`;
    movieStrang +=  `</div>`;
  });
  printToDom(movieStrang);
};

const printToDom = (stringz) => {
  movieOutputDiv.html(stringz);
};

module.exports = {
  domString,
};
