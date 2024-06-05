const { DataTypes } = require("sequelize");
const sequlize = require("../utils/db");

const Product = sequlize.define("product", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: DataTypes.STRING,
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Product;
// const db = require("../utils/db");
// const Cart = require("./cart");

// module.exports = class Product {
//   constructor(id, title, imageUrl, description, price) {
//     this.id = id;
//     this.title = title;
//     this.imageUrl = imageUrl;
//     this.description = description;
//     this.price = price;
//   }

//   save() {
//     return db.execute(
//       "INSERT INTO `node-express`.`products` (`title`, `price`, `description`, `imageUrl`) VALUES (?, ?, ?, ?)",
//       [this.title, this.price, this.description, this.imageUrl]
//     );
//   }

//   static deleteById(id) {}

//   static fetchAll() {
//     return db.execute("SELECT * FROM products");
//   }

//   static findById(id) {
//     return db.execute("SELECT * FROM products WHERE id = ?", [id]);
//   }
// };
