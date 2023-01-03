const express = require("express");
const bodyParser = require("body-parser");
const date = require("./date");

const itemList = [];
const workList = [];
// here we declare array as const, but by declaring array as const in
// javascript we can push elements in array
// only we can't redeclare it
// itemList = ["omkar", "asdf"]; // we can't do this

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

/* this line is mendatory to use EJS */
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { today: date, items: itemList });
  // 'index' is 'index.ejs' file
});
app.post("/", (req, res) => {
  const item = req.body.newItem;
  console.log(req.body);
  if (item !== "") {
    itemList.push(item);
  }
  res.redirect("/");
  // to get method of home
});

app.get("/work", (req, res) => {
  res.render("work", { today: "Work List", items: workList });
  // 'work' is 'work.ejs' file
});
app.post("/work", (req, res) => {
  const item = req.body.newItem;
  console.log(req.body);
  if (item !== "") {
    workList.push(item);
  }
  res.redirect("/work");
});

app.get("/about", (req, res) => {
  res.render("about");
  // 'about' is 'about.ejs' file
});

app.get("/contact", (req, res) => {
  res.render("contact");
  // 'contact' is 'contact.ejs' file
});

app.listen(80, "127.0.0.1", () => {
  console.log(
    "Server 3000 has started at 'http://127.0.0.1' OR 'http://localhost'"
  );
});
