const tmdb = require ('./tmdb');

const myLinks = () => {
  $(document).click((e) => {
    if (e.target.id === 'authLink') {
      $('#myMovies').addClass('hide');
      $('#search').addClass('hide');
      $('#authScreen').removeClass('hide');
    } else if (e.target.id === 'movieLink') {
      $('#myMovies').removeClass('hide');
      $('#search').addClass('hide');
      $('#authScreen').addClass('hide');
    } else {
      $('#myMovies').addClass('hide');
      $('#search').removeClass('hide');
      $('#authScreen').addClass('hide');
    };
  });
};

const pressEnter = (results) => {
  $(document).keypress((e) => {
    if (e.key === 'Enter') {
      tmdb.showResults(results);
    }
  });
};

const initializer = () => {
  myLinks();
  pressEnter();
};

module.exports = {
  initializer,
};
