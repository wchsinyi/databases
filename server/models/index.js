var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      var query = `SELECT * FROM messages`;
      db.query(query, [], function(err, results){
        if (err) {
          callback(err, null);
        } else {
          callback(null, results);
        }
      });
    }, // a function which produces all the messages
    post: function (option, callback) {
      var query = `INSERT INTO messages (roomname, userID, message) VALUE (${option.roomname}, (SELECT userID FROM users where username = ${option.username}), ${option.message})`
      db.query(query, [], function(err, results){
        if (err) {
          throw err;
        } else {
          callback(null, results);
        }
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      var query = `SELECT * FROM users`;
      db.query(query, [], function(err, results){
        if (err) {
          callback(err, null);
        } else { 
          callback(null, results);
        }
      });
    },
    post: function (option, callback) {
      var query = `INSERT INTO users (username) VALUE (${username})`
      db.query(query, [], function(err, results){
        if (err) {
          throw err;
        } else {
          callback(null, results);
        }
      });    
    }
  }
};

