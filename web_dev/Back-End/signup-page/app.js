const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

/*
server doesn't accept relative file
so you to convert one folder to static and keep all your static files there
*/
app.use(express.static("lib"));
/* If you comment above statement then your css file will never load on webpage */

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/lib/pages/index.html");
});

app.post("/", (req, res) => {
  var userName = req.body.userName;
  var userEmail = req.body.userEmail;
  var userPassword = req.body.userPassword;

  // res.write("userName: " + userName);
  // res.write("\nuserEmail: " + userEmail);
  // res.write("\nuserPassword: " + userPassword);
  // res.send();

  // console.log(userName + "\n" + userEmail + "\n" + userPassword);

  if (
    userEmail.length === 0 ||
    userName.length === 0 ||
    userPassword.length === 0
  )
    res.sendFile(__dirname + "/lib/pages/failure.html");
  else res.sendFile(__dirname + "/lib/pages/success.html");
});

// In 'failure.html' you gave a 'action="/failure"' to form
// So it will send you to this method as you gave '/failure' as url to post method here
app.post("/failure", function (req, res) {
  res.redirect("/"); // and this will redirect you to home-page
});
// So as result when you click on button('Signup Once More') => you get to redirect to home-page

app.listen(80, () => {
  console.log(
    "Server 3000 has started at 'http://127.0.0.1:80' OR 'http://localhost:80"
  );
});
