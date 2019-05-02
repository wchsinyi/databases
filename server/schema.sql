DROP DATABASE chat;
CREATE DATABASE chat;

USE chat;

CREATE TABLE username (
  usernameID INT PRIMARY KEY,
  username VARCHAR(25)
);

CREATE TABLE roomname (
  roomnameID INT PRIMARY KEY,
  roomname VARCHAR(25)

);

CREATE TABLE messages (
  /* Describe your table here.*/
  usernameID INT,
  msg VARCHAR(25), 
  roomnameID INT,
  -- FOREIGN KEY(roomnameID) REFERENCES roomname(roomnameID),
  -- FOREIGN KEY(usernameID) REFERENCES username(usernameID)
);


INSERT INTO username (usernameID, username) VALUES (1, 'uma');
INSERT INTO username (usernameID, username) VALUES (2, 'martin');
INSERT INTO roomname (roomnameID, roomname) VALUES (1, 'green');
INSERT INTO roomname (roomnameID, roomname) VALUES (2, 'blue');
INSERT INTO messages (roomnameID, usernameID, msg) VALUES (2, 1, 'Whaaattt"s up');
INSERT INTO messages (roomnameID, usernameID, msg) VALUES (1, 1, 'Aloha');
INSERT INTO messages (roomnameID, usernameID, msg) VALUES (1, 2, 'Pineapple Pie');


/* Create other tables and define schemas for them here! */
-- 'INSERT INTO messages (username, msg, roomname) VALUES (body.username, body.message, body.roomname);'

/*  Execute this file from the command line by typing:
 *    mysql -u student < server/schema.sql
 *  to create the database and the tables.*/

