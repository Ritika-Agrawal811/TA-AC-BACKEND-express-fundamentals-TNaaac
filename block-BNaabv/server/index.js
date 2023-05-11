const express = require("express");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const app = express();

app.use(logger());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("<h2>Welcome to express</h2>");
});

app.use(cookieParser());

app.use("/cookie", (req, res, next) => {
  res.cookie("username", "ritika");
  next();
});

app.get("/about", (req, res) => {
  res.send("My name is qwerty");
});

app.get("/users/:username", (req, res) => {
  res.send(req.params.username);
});

app.post("/form", (req, res) => {
  res.send(req.body);
});

app.post("/json", (req, res) => {
  res.send(`Name : ${req.body.name} 
  Age : ${req.body.age}
  Email : ${req.body.email}`);
});

app.use((req, res, next) => {
  res.send("Page not found!");
});

app.use((err, req, res, next) => {
  res.send(err);
});

app.listen(3000, () => {
  console.log("server started on port 3000");
});
