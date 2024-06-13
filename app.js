const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const errorController = require("./controllers/error");
const User = require("./models/user");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
// const user = require("./models/user");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  User.findById("666a85d86c7b22cf131d57a4")
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => console.log(err));
});

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoose
  .connect(
    "mongodb+srv://ahmedreda152:EQcK4nnEuAfnUqJ1@cluster0.y52xdx6.mongodb.net/shop?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then((result) => {
    User.findOne().then((user) => {
      if (!user) {
        const newUser = new User({
          name: "ahmed",
          email: "ahmedreda152@gmail.com",
          cart: {
            items: [],
          },
        });
        newUser.save();
      }
    });
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });

//    "mongodb+srv://ahmedreda152:EQcK4nnEuAfnUqJ1@cluster0.y52xdx6.mongodb.net/shop?retryWrites=true&w=majority&appName=Cluster0"
