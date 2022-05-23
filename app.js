const express = require("express");

const app = express();
const port = 3000;
const mysql = require("./db/mysql.js");

mysql.connect();

// route
const user = require("./user/user.js");
const category = require("./category/category.js");

// prefix
app.use("/api/user", user);
app.use("/api/category", category);

app.get("/", (req, res) => res.send("Hello Express!"));

app.get("/user/:name/:age", function (req, res) {
  var params = req.params;
  console.log(params);

  mysql.query("select * from user", function (err, result) {
    if (err) console.log(err);
    else {
      console.log(result);
    }
  });
  res.send("User Name : " + params.name + " / User Age : " + params.age);
});

app.listen(3000, () => console.log("Server listens on port ", port, "..."));
