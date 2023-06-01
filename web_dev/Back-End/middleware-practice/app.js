const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const fruitRoute = require("./routes/fruits-route");
const placeRoute = require("./routes/places-routes");
const homeRoute = require("./routes/home-route");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("./lib"));

/* Here in midleware it's upto you whether u have to mention any route or not
 bcoz in corresponding callbacks routes are mentioned */

app.use(homeRoute);
// here also we have not used any route, but in "home-route.js" we have used '/' and '/users' routes
// so this midleware will not be called for any route
// it will be called for '/' and '/users' routes only

/* Here route mentioned is '/places' and in 'places-routes.js' route is '/:pId'
so these midleware is called when the route is like '/places/:pId' */
app.use("/places", placeRoute);

/* use '/fruits/apple' or '/fruits/banana' to see the result instead of only '/fruits' */
app.use("/api/fruits", fruitRoute);

app.use((req, res, next) => {
  res.status(404).send("<h1>Page not found</h1>");
});
/* As we do not added any route here, so when for any route there is no responce this will be called */
// So these midleware is called when there is no responce for any route

const PORT = 1437;
const url = "mongodb://127.0.0.1:27017/places_DB";
mongoose
  .connect(url)
  .then(() => {
    app.listen(PORT, () => {
      console.log(
        `Server is connected to database and listening on port ${PORT}`
      );
    });
  })
  .catch((err) => `Error: ${err}`);
