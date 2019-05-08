var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


// create a connection between database and node
// then export the database


// https://stackoverflow.com/questions/30545749/how-to-provide-a-mysql-database-connection-in-single-file-in-nodejs



var messageDB = mysql.createConnection({
    user: 'student',
    password: 'student',
    database: 'chat'
  });

messageDB.connect(function(err) {
  if (err) {
      console.error('error connecting: ' + err.stack);
      return;
  }
});
module.exports = messageDB;