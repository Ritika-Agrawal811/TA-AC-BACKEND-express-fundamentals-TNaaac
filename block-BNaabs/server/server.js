const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/new", (req, res) => {
  res.sendFile(__dirname + "/new.html");
});

app.get("/users/:value", (req, res) => {
  res.send(req.params.value);
});

app.post("/new", (req, res) => {
  res.send(req.body);
});

app.listen(3000, () => {
  console.log("server listening on port 3000");
});
