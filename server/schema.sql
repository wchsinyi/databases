DROP DATABASE chat;
CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  userID INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(25)
);

CREATE TABLE messages (
  msgID INT PRIMARY KEY AUTO_INCREMENT,
  message VARCHAR(25), 
  userID INT, 
  roomname VARCHAR(25),
  FOREIGN KEY( userID) REFERENCES users(userID)
);

INSERT INTO users (username) VALUES ('Bill Murray');
INSERT INTO users (username) VALUES ('Hokulani');
INSERT INTO users (username) VALUES ('Nicole Kidman');
INSERT INTO messages (roomname, userID , message) VALUES ('Panic Room', (SELECT userID FROM users where username = 'Bill Murray' ), 'Ground Hog`s Day');
INSERT INTO messages (roomname, userID, message) VALUES ('Panic Room', (SELECT userID FROM users where username = 'Hokulani' ), 'Aloha');
INSERT INTO messages (roomname, userID, message) VALUES ('Green Room', (SELECT userID FROM users where username = 'Nicole Kidman' ), 'Pineapple Pie');


-- CREATE TABLE username (
--   usernameID INT PRIMARY KEY ,
--   username VARCHAR(25)
-- );

-- CREATE TABLE roomname (
--   roomnameID INT PRIMARY KEY,
--   roomname VARCHAR(25)
-- );
-- INSERT INTO username (usernameID, username) VALUES (1, 'uma');
-- INSERT INTO username (usernameID, username) VALUES (2, 'martin');
-- INSERT INTO roomname (roomnameID, roomname) VALUES (1, 'green');
-- INSERT INTO roomname (roomnameID, roomname) VALUES (2, 'blue');
-- INSERT INTO messages (roomnameID, usernameID, msg) VALUES (2, 1, 'Whaaattt"s up');
-- INSERT INTO messages (roomnameID, usernameID, msg) VALUES (1, 1, 'Aloha');
-- INSERT INTO messages (roomnameID, usernameID, msg) VALUES (1, 2, 'Pineapple Pie');
-- FOREIGN KEY(roomnameID) REFERENCES roomname(roomnameID),
-- FOREIGN KEY(usernameID) REFERENCES username(usernameID),

/* Create other tables and define schemas for them here! */

/*  Execute this file from the command line by typing:
 *    mysql -u student < server/schema.sql
 *  to create the database and the tables.*/




