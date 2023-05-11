const express = require("express");
const app = express();

app.use((req, res, next) => {
  let time = new Date().toLocaleTimeString();
  console.log(`${req.method} ${req.url} ${time}`);
  next();
});

app.use((req, res, next) => {
  let store = "";
  if (req.headers["content-type"] == "application/json") {
    req.on("data", (err, content) => {
      store += content;
      console.log(store);
    });

    req.on("end", () => {
      console.log(req.body);
      console.log(store);
      req.body = "hello";
    });
  }

  next();
});

app.get("/", (req, res) => {
  res.send("Welcome!");
});

app.post("/", (req, res) => {
  res.send(req.body);
});

app.listen(3000, () => {
  console.log("server listening on port 3000");
});
