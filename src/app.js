const path = require("path");
const express = require("express");

const app = express();
var hbs = require('hbs')

const publicDirectoryPath = path.join(__dirname, "../public");
const partialsPath = path.join(__dirname, "./../templates/partials")

//setup hbs engine and views location
app.set("views", path.join(__dirname, "./../templates/views"));
app.set("view engine", "hbs"); //use handlebars
hbs.registerPartials(partialsPath)

//setup static directory to serve 
app.use(express.static(publicDirectoryPath));

console.log(__dirname);
app.get("", (req, res) => {
  res.render("index", {
    title: "weahter app",
    name: "Vu"
  });
});

app.get("/about", (req, res) => {
  res.render('about', {
    content: "about test"
  })
})

app.get('/products', (req, res) => {
  if(!req.query.search){
    return res.send({
      error: 'You must provide a search term'
    })
  }
  res.send({
    products: []
  })
})

app.get("/about/*", (req, res) => {
  res.render('404')
})

app.get('*', (req, res) => {
  res.send('404 page')
})
// app.get("", (req, res) => {
  

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
  console.log(publicDirectoryPath);
  console.log("Sever is listening on port 3000");
});
