const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const md5 = require("md5"); // this is require to hash your data
// 'encrypting with hashing' is secure than 'encrypting with key'

const mongoDB = "mongodb://127.0.0.1:27017/userDB";
mongoose.set("strictQuery", false);
mongoose.connect(mongoDB, (err) => {
  if (err) console.log(`Unable to connect to MongoDB: ${err}`);
  else console.log("MongoDB is now connected");
});

// schema to store users 'email' and 'password'
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});
const User = mongoose.model("userid", userSchema);

// schema for secrets that gonna to share
const secretSchema = new mongoose.Schema({
  secret: String,
});
const Secret = mongoose.model("secret", secretSchema);

// initializing app
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("pages/home");
});

app.get("/login", (req, res) => {
  res.render("pages/login");
});
app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = md5(req.body.password); // here your password will save as hash

  User.findOne({ email: email, password: password }, (err, foundEmail) => {
    if (err) console.log(`Error is: ${err}`);
    else {
      if (foundEmail) res.redirect("/secrets");
      else
        res.send("<h1>404: User Not Found!</h1></br><h2>Register First!</h2>");
    }
  });
});

app.get("/register", (req, res) => {
  res.render("pages/register");
});
app.post("/register", (req, res) => {
  const email = req.body.email;
  const password = md5(req.body.password); // here your password will save as hash

  User.findOne({ email: email }, (err, foundEmail) => {
    if (err) console.log(`Error is ${err}`);
    else {
      if (foundEmail)
        // if user already registered
        res.send("<h1>This email is already register with us!</h1>");
      else {
        // creating new user
        const newUser = new User({
          email: email,
          password: password,
        });
        newUser.save((err) => {
          if (err) console.log(`Saving err is: ${err}`);
          else res.redirect("/secrets");
        });
      }
    }
  });
});

app.get("/submit", (req, res) => {
  res.render("pages/submit");
});
app.post("/submit", (req, res) => {
  // console.log(req.body.secret);
  const newSecret = new Secret({
    secret: req.body.secret,
  });
  newSecret.save();
  res.redirect("/secrets");
});

app.get("/secrets", (req, res) => {
  Secret.find((err, allSecrets) => {
    if (err) console.log(err);
    else {
      // console.log(allSecrets);
      res.render("pages/secrets", { allSecrets: allSecrets });
    }
  });
});

app.listen(80, () => {
  console.log("Server Up");
});
