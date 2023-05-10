const express = require("express");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const app = express();

app.use(logger("dev"));

app.use(cookieParser());

app.use("/about", (req, res, next) => {
  res.cookie("username", "ritika");
  next();
});

app.get("/", (req, res) => {
  res.send("Welcome!");
});

app.use((req, res, next) => {
  console.log(req.cookies);
  next();
});

app.listen(3000, () => {
  console.log("server listening on port 3000");
});
