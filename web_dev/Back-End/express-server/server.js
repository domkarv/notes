// import express from "express";
const express = require("express");
const app = express(); // initializing express in project

// "/" => represent home-page of website
// And below line means when home-page gets load what responce should get on that page
app.get("/", function (request, responce) {
  // console.log(request);
  console.log(responce);
  /* this will show you the information associated with 'request' made by server
  to see this information (1) start your server => (2) load your site => (3) see git bash, information is listed on bash */
  /*in 2nd step => you loaded your site that means you made an request to your server to send the information */

  responce.send("Omkar Date");
  // responce.send("<h1>Omkar Date</h1>"); // you can also pass html elements
}); /* Address for this is 'localhost:3000/' */

// This line means when about-page gets load what responce should get on that page
app.get("/about", function (request, responce) {
  responce.send("I'm 19 year old student.");
}); /* Address for this is 'localhost:3000/about' */

/*
For more convenience most of developers use this ->
app.get("/", function (req, res) {
  responce.send("...");
});

instead of this ->
app.get("/", function (request, responce) {
  responce.send("...");
});
*/

// app.listen(3000); // learn more about this 'listen()' mathod
app.listen(3000, function () {
  console.log(
    "Server 3000 has started at 'http://127.0.0.1:3000' OR 'http://localhost:3000"
  );
}); // just to get notified that server is started we have passed a function otherwise both statments are same
/*
Above statements => 
Starts the HTTP server listening for connections.
Binds and listens for connections on the specified host and port.
*/
