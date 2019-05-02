var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


// create a connection between database and node
// then export the database

var messageDB = mysql.createConnection({
    user: 'student',
    password: 'student',
    database: 'chat'
  });

module.exports.messagesDB = messageDB;