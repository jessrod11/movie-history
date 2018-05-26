const movieOutputDiv = $('#movies');

const domString = (movieArray, config) => {
  let movieStrang = '';
  movieArray.forEach((movie) => {
    movieStrang += `<div class="col-sm-6 col-md-4">`;
    movieStrang += `<div class="thumbnail">`;
    movieStrang += ` <img src="${config.base_url}/w342/${movie.poster_path}" alt="Movie Poster">`;
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
  movieOutputDiv.append(stringz);
};

module.exports = {
  domString,
};
