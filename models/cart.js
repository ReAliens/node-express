const { DataTypes } = require("sequelize");
const sequlize = require("../utils/db");

const Cart = sequlize.define("cart", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
});

module.exports = Cart;
