/* You'll need to have MySQL running and your Node server running
 * for these tests to pass. */

var mysql = require('mysql');
var request = require('request'); // You might need to npm install the request module!
var expect = require('chai').expect;

describe('Persistent Node Chat Server', function() {
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
    console.log('initially here')
    dbConnection.query('SELECT * FROM messages;', (err, data)=> {
      if (err){
        throw err;
      } else {
        console.log('beforeEach data', data);
        console.log('beforeEach typeof data', typeof data);  
        for (let i in data) {
          console.log(data[i]);
        }
      }
      done();
    });

    // dbConnection.query('truncate ' + tablename, done);
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
      var insert = `insert into users (username) VALUES ("Holly Mary")`
      dbConnection.query(insert, [], (err, data)=> {
        if (err){
          console.log('err', err);
        } 
      });


      dbConnection.query('SELECT * FROM users;', (err, data)=> {
        if (err){
          throw err;
        } else {
          console.log('user data', data);
          console.log('beforeEach typeof user data', typeof data);  
          for (let i in data) {
            console.log(data[i].username);
          }
        }
        done();
      });
  
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
          var q = `SELECT * FROM messages WHERE roomname = 'Hello';`;
          dbConnection.query(q, [], function(err, results){
            if (err) {
              throw err;
            } else {
              console.log('results', results);
              console.log('typeof results', typeof(results));
              for (let p in results) {
                console.log(p, results[p].usernameID)            
                }
              done();
            }
            done(); 
          });

        // }

        // Now if we look in the database, we should find the
        // posted message there.
        // var insert = 'insert into messages(message, userID, roomname) \
        // value (`hi whats up`, (select id from users where username = `Valjean` limit 1), `green room`)';

        // dbConnection.query(insert, [], (err, data)=> {
        //   if (err){
        //     console.log('err', err);
        //   } else {
        //     console.log(data);
        //   }
        // });

        // TODO: You might have to change this test to get all the data from
        // your message table, since this is schema-dependent.
        var queryString = 'SELECT * FROM messages';
        var queryArgs = [];
        console.log("where are we?")
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
