/* You'll need to have MySQL running and your Node server running
 * for these tests to pass. */

var mysql = require('mysql');
var request = require('request'); // You might need to npm install the request module!
var expect = require('chai').expect;

xdescribe('Persistent Node Chat Server', function() {
  var dbConnection;

  beforeEach(function(done) {
    dbConnection = mysql.createConnection({
      user: 'student',
      password: 'student',
      database: 'chat'
    });
    dbConnection.connect();

       var tablename = "messages"; // TODO: fill this out

    /* Empty the db table before each test so that multiple tests
     * (or repeated runs of the tests) won't screw each other up: */
    dbConnection.query('USE chat; SELECT * FROM messages;', (err, data)=> {
      console.log('beforeEach data', data);
      console.log('beforeEach typeof data', typeof data);
      done();
    });

    // dbConnection.query('truncate ' + tablename, done);
    // dbConnection.query('USE chat; SELECT * FROM messages;', done);
  });

  afterEach(function() {
    dbConnection.end();
  });

  it('Should insert posted messages to the DB', function(done) {
    // Post the user to the chat server.
    request({
      method: 'POST',
      uri: 'http://127.0.0.1:3000/classes/users',
      json: { username: 'Valjean' }
    }, function () {
      console.log('success of request I')
      // Post a message to the node chat server:
      request({
        method: 'POST',
        uri: 'http://127.0.0.1:3000/classes/messages',
        json: {
          username: 'Valjean',
          message: 'In mercy\'s name, three days is all I need.',
          roomname: 'Hello'
        }
      }, function () {
        console.log('success of request II')

        // Now if we look in the database, we should find the
        // posted message there.
        var insert = 'INSERT INTO messages (roomnameID, usernameID, msg) VALUES (15, 18, "hiya"); ' ;
        dbConnection.query(insert, [], ()=> {});
        var q = 'SELECT * FROM MESSAGES WHERE roomnameID = 15;';
        dbConnection.query(q, [], function(err, results){
          console.log('I am sending a request');
          console.log('results', results);
          console.log('typeof results', typeof(results));
          for (let p in results) {
            console.log(p, results[p].usernameID)            
          }
        });
        // TODO: You might have to change this test to get all the data from
        // your message table, since this is schema-dependent.
        var queryString = 'SELECT * FROM messages';
        var queryArgs = [];

        dbConnection.query(queryString, queryArgs, function(err, results) {
          console.log('success of request III')
          console.log('results', results)
          
          // Should have one result:
          expect(results.length).to.equal(1);

          // TODO: If you don't have a column named text, change this test.
          expect(results[0].msg).to.equal('In mercy\'s name, three days is all I need.');

          done();
        });
      });
    });
  });

  // it('Should output all messages from the DB', function(done) {
  //   // Let's insert a message into the db
  //      var queryString = "SELECT * FROM messages";
  //      var queryArgs = [];
  //   // TODO - The exact query string and query args to use
  //   // here depend on the schema you design, so I'll leave
  //   // them up to you. */

  //   dbConnection.query(queryString, queryArgs, function(err) {
  //     if (err) { throw err; }

  //     // Now query the Node chat server and see if it returns
  //     // the message we just inserted:
  //     request('http://127.0.0.1:3000/classes/messages', function(error, response, body) {
  //       var messageLog = JSON.parse(body);
  //       expect(messageLog[0].msg).to.equal('Men like you can never change!');
  //       expect(messageLog[0].roomnameID).to.equal('main');
  //       done();
  //     });
  //   });
  //       // NEW TEST:
  //       var queryString = "SELECT roomname FROM roomname WHERE roomnameID IN (SELECT roomnameID IN messages WHERE msg = 'Men like you can never change!' ) ";
  //       var queryArgs = []; // come back later
 
  //    dbConnection.query(queryString, queryArgs, function(err) {
  //      if (err) { throw err; }
 
  //      request('http://127.0.0.1:3000/classes/messages', function(error, response, body) {
  //        var messageLog = JSON.parse(body);
  //        expect(messageLog[0].roomname).to.equal('main');
  //        done();
  //      });
  //    });
  // });
});
