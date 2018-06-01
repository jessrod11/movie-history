const domString = (movieArray, config, whereToPrint) => {
  let movieStrang = '';
  movieArray.forEach((movie, index) => {
    if (index % 3 === 0) {
      movieStrang += `<div class="row">`;
    }
    movieStrang += `<div class="col-sm-6 col-md-4">`;
    movieStrang += `<div class="thumbnail movie">`;
    movieStrang += ` <img data-poster="${movie.poster_path}" src="${config.base_url}/w342/${movie.poster_path}" alt="Movie Poster">`;
    movieStrang += `<div class="caption">`;
    movieStrang += `<h3 class="movie-title">${movie.original_title ? movie.original_title : movie.title}</h3>`;
    movieStrang += `<p>${movie.overview}</p>`;
    movieStrang += `<p class="movie-overview"><a href="#" class="btn btn-primary" role="button">Review</a> <a href="#" class="btn btn-default addMovieToWishlist" role="button">Wishlist</a></p>`;
    movieStrang += `</div>`;
    movieStrang +=  `</div>`;
    movieStrang +=  `</div>`;

    if (index % 3 === 2) {
      movieStrang += `</div>`;
    }
  });
  printToDom(whereToPrint, movieStrang);
};

const printToDom = (whereToPrint, stringz) => {
  $(`#${whereToPrint}`).html(stringz);
};

module.exports = {
  domString,
};
