const express = require("express");
const bodyParser = require("body-parser");
// const date = require("./date");
const lodash = require("lodash");
const mongoose = require("mongoose");
const { name } = require("ejs");

mongoose.set("strictQuery", false);
const mongoDB = "mongodb://127.0.0.1:27017/todolistDB";
mongoose.connect(mongoDB, (err) => {
  if (err) console.log(`Unable to connect to the server: ${err}`);
  else console.log("MongoDB is connected");
});

const listSchema = new mongoose.Schema({
  task: String,
  // task: {
  //   type: String,
  //   required: [true, "Please check your data, task is not specified!"],
  // },
});

const Task = mongoose.model("taskcollection", listSchema);

const customListSchema = new mongoose.Schema({
  name: String,
  // name: {
  //   type: String,
  //   required: [true, "Please check your data, task is not specified!"],
  // },
  items: [listSchema],
});

const CustomeTask = mongoose.model("CustomeTaskCollection", customListSchema);

const item1 = new Task({
  task: "Welcome to ToDo List",
});
const item2 = new Task({
  task: "Click + Button to add new item",
});
const item3 = new Task({
  task: "Click ckeckbox to delete item",
});

const defaultItems = [item1, item2, item3];

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

/* this line is mendatory to use EJS */
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  Task.find((err, allItems) => {
    if (err) console.log(`Reading error is: ${err}`);
    else {
      // console.log(allItems);

      // we are doing this bcoz we want to insert default items only one time
      // 'allItems.length === 0' this means no item in the database
      if (allItems.length === 0) {
        Task.insertMany(defaultItems, (err) => {
          if (err) console.log(`Insertion error is: ${err}`);
          else console.log("Insertion Successful!");
        });

        res.redirect("/");
        // after inserting items into database redirect page to home,
        // now this time 'else' part will run bcoz now 'allItems.length > 0'
      } else res.render("index", { title: "Today", items: allItems });
      // here we have passed whole object called 'allItems' and
      // we want access only one property of it called 'task'
      // for this see 'index.ejs'
    }
  });
});

app.post("/", (req, res) => {
  const item = req.body.newItem.trim();
  /* trim() removes starting whitespace */
  const requestedTitle = req.body.addButton;

  if (item === "") {
    if (requestedTitle === "Today") res.redirect("/");
    else res.redirect(`/${requestedTitle}`);
  } else {
    const newItem = new Task({
      task: item,
    });

    if (requestedTitle === "Today") {
      newItem.save();
      res.redirect("/");
    } else {
      CustomeTask.findOne({ name: requestedTitle }, (err, foundList) => {
        if (err) console.log(`Reading error is: ${err}`);
        else {
          foundList.items.push(newItem);
          /* 'foundList.items' is array of objects */
          foundList.save();
          res.redirect(`/${requestedTitle}`);
        }
      });
    }
  }
});

app.get("/:customListName", (req, res) => {
  const customListName = lodash.startCase(req.params.customListName);

  CustomeTask.findOne({ name: customListName }, (err, foundList) => {
    if (err) console.log(`Reading error is: ${err}`);
    else {
      if (foundList) {
        // 'index' is 'index.ejs' file
        res.render("index", {
          title: foundList.name,
          items: foundList.items,
        });
        console.log(`${foundList.name} already exists!`);
      } else {
        // if list not found creating new list and saving
        const newItem = new CustomeTask({
          name: customListName,
          items: defaultItems,
        });
        newItem.save();
        console.log(`${customListName} is created!`);
        res.redirect("/" + customListName);
      }
    }
  });
});

app.post("/delete", (req, res) => {
  const itemId = req.body.checkBox; // this gives you id of task
  const listTitle = req.body.hiddenInput;

  if (listTitle === "Today") {
    // Task.deleteOne({ _id: itemId }, (err) => {
    // Task.findByIdAndRemove({ _id: itemId }, (err) => {
    /* in this 'findByIdAndRemove' method, you need to provide callback function (refer official documentation) */
    Task.findByIdAndDelete({ _id: itemId }, (err) => {
      if (err) console.log(`Deletion error is: ${err}`);
      else console.log("Deletion Successful!");
    });
    res.redirect("/");
  } else {
    CustomeTask.findOneAndUpdate(
      { name: listTitle },
      { $pull: { items: { _id: itemId } } },
      (err, foundList) => {
        if (err) console.log(`Reading error is: ${err}`);
        else res.redirect(`/${listTitle}`);
      }
    );
  }
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
