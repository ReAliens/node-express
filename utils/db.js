const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (cb) => {
  console.log("Attempting to connect to MongoDB...");

  MongoClient.connect(
    "mongodb+srv://ahmedreda152:EQcK4nnEuAfnUqJ1@cluster0.y52xdx6.mongodb.net/shop?retryWrites=true&w=majority&appName=Cluster0"
  )
    .then((client) => {
      console.log("connected to mongodb");
      _db = client.db();
      cb(client);
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "No database found";
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
