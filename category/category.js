const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
// const mysql = require("../db/mysql.js");

// mysql.connect();

app.get("/", (req, res) => res.send("Hello category js!"));

app.post("/signin", function (req, res) {
  var params = req.body;
  let id = params.id;
  let password = params.password;
  console.log(id, " ", password);

  //   mysql.query("select * from user", function (err, result) {
  //     if (err) console.log(err);
  //     else {
  //       console.log(result);
  //     }
  //   });
  res.send("User Name : " + id, " ", password);
});

app.post("/login", function (req, res) {
  var params = req.body;
  console.log(params);
  let id = params.id;
  let password = params.password;
  console.log(id, " ", password);

  //   mysql.query("select * from user", function (err, result) {
  //     if (err) console.log(err);
  //     else {
  //       console.log(result);
  //     }
  //   });
  res.send("User Name : " + id, " ", password);
});

app.get("/logout/:id", function (req, res) {
  var params = req.params;
  let id = params.id;
  console.log(id);

  //   mysql.query("select * from user", function (err, result) {
  //     if (err) console.log(err);
  //     else {
  //       console.log(result);
  //     }
  //   });
  res.send("id : " + id);
});

module.exports = app;
