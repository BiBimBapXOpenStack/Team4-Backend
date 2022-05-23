const mysql = require("mysql");
const dbconfig = {
  host: "localhost",
  port: "3306",
  user: "root",
  password: "kjw9348792!",
  database: "teamfour",
};

module.exports = mysql.createConnection(dbconfig);
