const { DataTypes } = require("sequelize");
const sequlize = require("../utils/db");

const Order = sequlize.define("order", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
});

module.exports = Order;
