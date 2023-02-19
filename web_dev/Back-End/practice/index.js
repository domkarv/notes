const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send("<h1>My name is Omkar Date</h1>");
});
app.get("/about", function (req, res) {
  res.send("<h1>This is about page</h1>");
});

app.listen(3000);
