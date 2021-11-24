const path = require("path");
const express = require("express");

const app = express();
const publicDirectoryPath = path.join(__dirname, "../public");

app.set("views", path.join(__dirname, "./../views"));
app.set("view engine", "hbs"); //use handlebars
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index");
});

// app.get("", (req, res) => {
//   res.send("<h1>Hello</h1>");
// }); will not use when use express.static

// app.get("/help", (req, res) => {
//   res.send("help");
// });

// app.get("/about", (req, res) => {
//   res.send("<h1>about</h1>");
// });

app.get("/weather", (req, res) => {
  res.send({
    forecast: "sunny",
    location: "hanoi",
  });
});

app.listen(3000, () => {
  console.log("Sever is listening on port 3000");
});
