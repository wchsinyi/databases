DROP DATABASE chat;
CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  userID INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(25)
);

CREATE TABLE messages (
  msgID INT PRIMARY KEY AUTO_INCREMENT,
  message LONGTEXT, 
  userID INT, 
  roomname VARCHAR(25),
  FOREIGN KEY( userID) REFERENCES users(userID)
);

-- INSERT INTO users (username) VALUES ('Bill Murray');
-- INSERT INTO users (username) VALUES ('Hokulani');
-- INSERT INTO users (username) VALUES ('Nicole Kidman');
-- INSERT INTO messages (roomname, userID , message) VALUES ('Panic Room', (SELECT userID FROM users where username = 'Bill Murray' ), 'Ground Hog`s Day');
-- INSERT INTO messages (roomname, userID, message) VALUES ('Panic Room', (SELECT userID FROM users where username = 'Hokulani' ), 'Aloha');
-- INSERT INTO messages (roomname, userID, message) VALUES ('Green Room', (SELECT userID FROM users where username = 'Nicole Kidman' ), 'Pineapple Pie');

/* Create other tables and define schemas for them here! */

/*  Execute this file from the command line by typing:
 *    mysql -u student < server/schema.sql
 *  to create the database and the tables.*/




