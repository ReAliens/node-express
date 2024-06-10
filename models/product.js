const { ObjectId } = require("mongodb");

const getDb = require("../utils/db").getDb;

class Product {
  constructor(title, price, description, imageUrl, id) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;
    this._id = id;
  }
  save() {
    const db = getDb();
    let dbObj;

    if (this._id) {
      dbObj = db
        .collection("products")
        .updateOne(
          { _id: ObjectId.createFromHexString(this._id) },
          { $set: this }
        );
    } else {
      dbObj = db.collection("products").insertOne(this);
    }
    return dbObj
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  static fetchAll() {
    const db = getDb();
    return db
      .collection("products")
      .find()
      .toArray()
      .then((products) => {
        return products;
      })
      .catch((err) => console.log(err));
  }

  static findById(prodId) {
    const db = getDb();
    return db
      .collection("products")
      .find({ _id: ObjectId.createFromHexString(prodId) })
      .next()
      .then((product) => {
        console.log(product);
        return product;
      })
      .catch((err) => console.log(err));
  }
}

module.exports = Product;
