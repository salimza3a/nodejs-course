const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "node-with-mysql",
  password: "Salimza3a@#$%*",
});

module.exports = pool.promise();
