DROP DATABASE chat;
CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  username VARCHAR(25),
  msg VARCHAR(25), 
  roomname VARCHAR(25),
);

/* Create other tables and define schemas for them here! */
'INSERT INTO messages (username, msg, roomname) VALUES (body.username, body.message, body.roomname);'




/*  Execute this file from the command line by typing:
 *    mysql -u student < server/schema.sql
 *  to create the database and the tables.*/

