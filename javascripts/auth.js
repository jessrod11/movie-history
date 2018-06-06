// const events = require('./events');
const {getAllMoviesEvent,} = require('./events');
const {setUID,} = require('./firebaseApi');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setUID(user.uid);
      // User is signed in.
      $('#myMovies').removeClass('hide');
      $('#search').addClass('hide');
      $('#authScreen').addClass('hide');
      $('#movieLink, #searchLink, #logout').removeClass('hide');
      $('#authLink').addClass('hide');
      // events.getAllMoviesEvent();
      getAllMoviesEvent();
    } else {
      // No user is signed in.
      $('#myMovies').addClass('hide');
      $('#search').addClass('hide');
      $('#authScreen').removeClass('hide');
      $('#logout, #movieLink, #searchLink').addClass('hide');
      $('#authLink').removeClass('hide');
    }
  });
};

module.exports = {
  checkLoginStatus,
};
