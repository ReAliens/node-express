const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoDBStrore = require("connect-mongodb-session")(session);

const errorController = require("./controllers/error");
const User = require("./models/user");
const MONGODB_URI =
  "mongodb+srv://ahmedreda152:EQcK4nnEuAfnUqJ1@cluster0.y52xdx6.mongodb.net/shop?w=majority&appName=Cluster0";

const app = express();
const store = new MongoDBStrore({
  uri: MONGODB_URI,
  collection: "sessions",
});

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const authRoutes = require("./routes/auth");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(
  session({
    secret: "my secret",
    resave: false,
    saveUninitialized: false,
    store,
  })
);

app.use((req, res, next) => {
  if (!req.session.user) {
    return next();
  }
  User.findById(req.session.user)
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => console.log(err));
});

app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use(authRoutes);

app.use(errorController.get404);

mongoose
  .connect(MONGODB_URI)
  .then((result) => {
    User.findOne().then((user) => {
      if (!user) {
        const user = new User({
          name: "ahmed",
          email: "ahmedreda152@gmail.com",
          cart: {
            items: [],
          },
        });
        user.save();
      }
    });
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });

//    "mongodb+srv://ahmedreda152:EQcK4nnEuAfnUqJ1@cluster0.y52xdx6.mongodb.net/shop?retryWrites=true&w=majority&appName=Cluster0"
