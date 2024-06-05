const Sequelize = require("sequelize");

const sequlize = new Sequelize("node-express", "root", "123123123", {
  dialect: "mysql",
  localhost: "localhost",
});

module.exports = sequlize;

// const mysql = require("mysql2");
// const pool = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   password: "123123123",
//   database: "node-express",
// });

// module.exports = pool.promise();
