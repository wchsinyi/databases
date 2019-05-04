var db = require('../db');

module.exports = {
  messages: {
    get: function (qStr) {
      // messageID should be aut
      var query = `INSERT INTO messages (messageID, userID, message) VALUE (${messageID}, ${userID}, ${message})`
      db.query(query, [], function(err, results){
        console.log("sucessfully posted a message")
      });
    }, // a function which produces all the messages
    post: function () {

    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {

    },
    post: function () {
    }
  }
};

