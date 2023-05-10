const Express = require("express");
const app = Express();

app.get("/", (req, res) => {
  res.send("Welcome to Home!");
});

app.get("/about", (req, res) => {
  res.send("Welcome to About Page!");
});

app.use((req, res, next) => {
  console.log(req.url);
  if (req.url === "/admin") {
    return next("Unauthorized");
  }

  next();
});

app.use((req, res, next) => {
  res.send("Page not found");
});

app.use((err, req, res, next) => {
  res.send(err);
  next();
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
