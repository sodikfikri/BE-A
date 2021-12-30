const MySql = require("mysql");

require("dotenv").config();

const { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DATABASE } = process.env;

const db = MySql.createPool({
  host: DB_HOST,
  user: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE,
});

db.getConnection((err, conn) => {
  if (err) console.error("Error connecting " + err.stack);
  if (conn) conn.release();
  return;
});

module.exports = db;