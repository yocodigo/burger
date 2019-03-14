// Set up MySQL connection.
const mysql = require("mysql"),
 connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "5Noneya))^&M",
  database: "burger_db"
});

// Connect to db
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
