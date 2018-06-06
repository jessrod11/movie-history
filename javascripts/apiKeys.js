const tmdb = require('./tmdb');
const firebaseApi = require('./firebaseApi');
const {checkLoginStatus,} = require('./auth');

const apiKeys = () => {
  return new Promise ((resolve, reject) => {
    $.ajax('./db/apiKeys.json')
      .done((data) => {
        resolve(data.apiKeys);
      })
      .fail((err) => {
        reject(err);
      });
  });
};

const retrieveKeys = () => {
  apiKeys()
    .then((results) => {
      tmdb.setKey(results.tmdb.apiKey);
      firebase.initializeApp(results.firebase);
      firebaseApi.setConfig(results.firebase);
      firebase.auth().signInWithEmailAndPassword('jessica.rodgers11@gmail.com', 'Justin11')
        .catch((error) => {
          $('#signin-error-msg').text(error.message);
          $('#signin-error').removeClass('hide');
          console.error(error.message);
        });
      checkLoginStatus();
    })
    .catch((err) => {
      console.error('no keys', err);
    });
};

module.exports = {
  retrieveKeys,
};
