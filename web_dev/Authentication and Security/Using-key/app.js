require("dotenv").config(); // to hide our keys
// this line should be at top most of code

// '.env' dotenv environment variable file

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const encrypt = require("mongoose-encryption"); // for encrypting data

const mongoDB = "mongodb://127.0.0.1:27017/userDB";
mongoose.set("strictQuery", false);
mongoose.connect(mongoDB, (err) => {
  if (err) console.log(`Unable to connect to MongoDB: ${err}`);
  else console.log("MongoDB is now connected");
});

/*
"mongoose-encryption"
https://www.npmjs.com/package/mongoose-encryption
For more refer this
*/

// schema to store users 'email' and 'password'
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});
// const screteKey = "BornToRule";
/* => this key is required for encryption
but as this is in our code then it can be accessed by anyone
as sometime our our code is available to open source
that's why we moved it to '.env' file */
userSchema.plugin(encrypt, {
  // secret: screteKey,
  secret: process.env.SECRETE_KEY, // this is how we can access that key
  encryptedFields: ["password"],
  // this is what makes password encrypted
}); // this plugin should be before 'mongoose.model'
// bcoz we have to use 'userSchema' in 'model'
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
  const password = req.body.password;

  /* 
  During save, documents are encrypted and then signed.
  During find, documents are authenticated and then decrypted
  => So below here, when we save this doc our 'password' get encrypted
  and when we start finding the 'email'
  then our password get decrypted and then we check is it equal to
  'password' enter by user or not
  */

  User.findOne({ email: email }, (err, foundEmail) => {
    if (err) console.log(`Error is: ${err}`);
    else {
      // if (foundEmail)
      if (foundEmail.password === password) res.redirect("/secrets");
      else res.send("<h1>404: User Not Found!</h1>");
    }
  });
});

app.get("/register", (req, res) => {
  res.render("pages/register");
});
app.post("/register", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

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
