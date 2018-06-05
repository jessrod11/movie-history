const domString = (movieArray, config, whereToPrint, myCollectionMode = false) => {
  let movieStrang = '';
  movieArray.forEach((movie, index) => {
    if (index % 3 === 0) {
      movieStrang += `<div class="row text-center">`;
    }
    movieStrang += `<div class="col-sm-6 col-md-4">`;
    movieStrang += `<div class="thumbnail movie" data-firebase-id="${movie.id}">`;
    if (myCollectionMode) {
      movieStrang += `<a class="btn deleteMovieFromCollectionEvent">X</a>`;
    }
    movieStrang += `<img data-poster="${movie.poster_path}" src="${config.base_url}/w342/${movie.poster_path}" alt="Movie Poster">`;
    movieStrang += `<div class="caption">`;
    movieStrang += `<h3 class="movie-title">${movie.original_title ? movie.original_title : movie.title}</h3>`;
    // movieStrang += `<p>${movie.overview}</p>`;
    if (!myCollectionMode) {
      movieStrang += `<p><a class="btn btn-default addMovieToWishlist" role="button">Wishlist</a></p>`;
    } else if (myCollectionMode && !movie.isWatched) {
      movieStrang += `<p><a class="btn btn-primary updateMovieToWatch" role="button">Watched</a></p>`;
    } else {
      movieStrang += `<p>I'm going to put star rating here one day.</p>`;
    }
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
