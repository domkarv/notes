const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

/* Addition calculator */
app.get("/", function (request, responce) {
  // responce.sendFile("index.html");
  /* this is ralative file path that means this is relative to calculator folder
  we don't know where this folder gonna be save. So instead of using relative path
  we have to use absolute path */

  // console.log(__dirname); // this will print on git bash once request is made by browser
  // this return current location of your file
  // e.g., for this 'index.js' current location is 'D:/Programmin/web_dev/Back-End/calculator/index.js'
  // and this is absolute file path i.e., from root location

  // responce.sendFile(__dirname + "/index.html");
  responce.sendFile("./index.html", { root: __dirname });
  // to sent message we use 'send' method and to send file we use 'sendFile' method
});
// To handle any post request made by site we have to use '.post()' method
// this is where our server process the post requests (in html file you have mention <form method="post">)
// now to access the data post by site we have to use 'body-parser' npm package (line 5 and 6)
// that parse the data from front-end to back-end
app.post("/", function (req, res) {
  // console.log(req.body); // this will give you all data post by site
  // console.log(req.body.num1);  // for 'num1' see 'calculator/index.html'
  // this is how you can access individual data

  // var num1 = Number(req.body.num1);
  // var num2 = Number(req.body.num2);
  // var ans = num1 + num2;
  // res.send(num1 + " + " + num2 + " = " + ans);

  // above and below statements are same
  // just to avoid confusion i've given different names to variables

  var n1 = Number(req.body.num1);
  var n2 = Number(req.body.num2);
  // just data post by site is in string form
  // so to convert them to number i've used Number() method
  var ans = n1 + n2;
  res.send(n1 + " + " + n2 + " = " + ans);
});

/* BMI Calculator */
app.get("/bmiCalculator", function (request, responce) {
  responce.sendFile(__dirname + "/bmiCalculator.html");
});
app.post("/bmiCalculator", function (req, res) {
  var height = Number(req.body.height);
  var weight = Number(req.body.weight);
  var ans = weight / Math.pow(height, 2);
  res.send("BMI = " + ans);
});

/* port:3000 */
app.listen(3000, function () {
  console.log(
    "Server 3000 has started at 'http://127.0.0.1:3000' OR 'http://localhost:3000"
  );
});
