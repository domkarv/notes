/* 
Tutorial number 243 to 246
*/

const express = require("express");
const bodyParser = require("body-parser");

// Their are 5 ways to make get request to external server and
// fetch thier data, https is one of that method
// this is the native way to make request
// that means no need to install any package for it
const https = require("https");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/lib"));

app.get("/", (request, responce) => {
  responce.responce.sendFile(__dirname + "/lib/index.html");
});

app.post("/", function (request, responce) {
  var cityName = request.body.cityName; // city name from index.html

  const url =
    "https://api.openweathermap.org/data/2.5/weather?appid=63178c5f48642193bfa7ef52d33493de&q=" +
    cityName +
    "&units=metric";

  // below line helps us to fetch data from mentioned url
  /* NOTE => don't forgot to add 'https://' before url if is not their */
  https.get(url, function (res) {
    // console.log(res);
    console.log(res.statusCode);

    // think like, 'data' that we get from external server as responce from it is stored in variable passed in function
    res.on("data", function (info) {
      // console.log(info);
      // by above line we get our data but in hex-code
      // so we have to convert it to JSON

      const weatherData = JSON.parse(info); // now this will convert your hex-code to JSON file
      // console.log(weatherData);

      // now our all data stored in variable called 'weatherData'
      // so to access this data, following lines works as address to that data
      const temp = weatherData.main.temp;
      const weatherDescript = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imageURL = "https://openweathermap.org/img/wn/" + icon + "@2x.png";

      /*
      Try any of the following three methods
      This help '.write' method to detect html elements
      .send method does not require this (see 'express-server/server.js')
      */
      responce.type("text/html");
      // responce.header("Content-Type", "text/html");
      // responce.writeHead(200, { "Content-Type": "text/html" });

      responce.write(
        "<h3>The weather in " + cityName + " is " + weatherDescript + "</h3>"
      );
      responce.write(
        "\nTemprature in " + cityName + " is: " + temp + " degree celcius"
      );
      responce.write("<img src=" + imageURL + ">");
      responce.send();
      // we can't write more than one 'send' method in one app method
      // so we are using write method that can be more than one
    });
  });
});

app.listen(80, () => {
  console.log(
    "Server with port 80 has started at 'http://127.0.0.1:80' OR 'http://localhost:80"
  );
});
