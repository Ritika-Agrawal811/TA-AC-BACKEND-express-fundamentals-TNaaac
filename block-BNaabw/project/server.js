const express = require("express");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));

app.use(logger("dev"));

app.use(cookieParser());

app.use((req, res, next) => {
  res.cookie("username", "ritika");
  next();
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/users", (req, res) => {
  res.send("Welcome to users!");
});

app.use((req, res, next) => {
  res.send("Page not Found!");
  next();
});

app.use((err, req, res, next) => {
  res.send(err);
  next();
});

app.listen(4000, () => {
  console.log("server listening on port 3000");
});
