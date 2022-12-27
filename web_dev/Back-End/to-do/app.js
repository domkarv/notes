const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const itemList = [];
// here we declare array as const, but by declaring array as const in
// javascript we can push elements in array
// only we can't redeclare it
// itemList = ["omkar", "asdf"]; // we can't do this

app.use(express.static("public"));

/* this line is mendatory to use EJS */
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };
  const day = new Date().toLocaleDateString("en-US", options);

  res.render("index", { today: day, items: itemList });
  // 'index' is 'index.ejs' file
});

app.get("/about", (req, res) => {
  res.render("about");
  // 'about' is 'about.ejs' file
});

app.get("/contact", (req, res) => {
  res.render("contact");
  // 'contact' is 'contact.ejs' file
});

app.post("/", (req, res) => {
  let item = req.body.newItem;
  console.log(req.body);
  if (item !== "") {
    itemList.push(item);
  }
  res.redirect("/");
});

app.listen(80, "127.0.0.1", () => {
  console.log(
    "Server 3000 has started at 'http://127.0.0.1' OR 'http://localhost"
  );
});
