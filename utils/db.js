const { Sequelize } = require("sequelize");

const sequlize = new Sequelize("node-express", "root", "123123123", {
  dialect: "mysql",
  localhost: "localhost",
});

module.exports = sequlize;
