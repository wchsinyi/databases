var db = require('../db');

module.exports = {
  messages: {
    get: function (request, response) {
      db.messagesDB.connect();
      // response.send('Message get');
      response.send(JSON.stringify(
        [{msg:'Men like you can never change!', name:'fred'}]
      ));
    }, // a function which produces all the messages
    post: function (request, response) {
      response.send('Message post!')

    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (request, response) {
      response.send('User get!')

    },
    post: function (request, response) {
      response.send('User post!')
    }
  }
};

