const express = require("express");
const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/json", (req, res) => {
  console.log(req.body);
  res.send("Hello");
});

app.post("/contact", (req, res) => {
  console.log(req.body);
  res.send("Hello");
});

app.listen(3000, () => {
  console.log("server listening on port 3000");
});
