var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var bodyparser = require("body-parser");
var mainRoutes = require("./routes/main");

const db = require("./config/db");
const sequelize = require("sequelize");
require("./models/customer");
db.sync()
  .then(() => console.log("Conectado al Servidor"))
  .catch((error) => console.log(error));
var app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(express.static("./dist/build/"));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", mainRoutes);
app.get("*", (req, res) => {
  res.sendFile("./dist/build/index.html");
});
app.listen(3200);
module.exports = app;
