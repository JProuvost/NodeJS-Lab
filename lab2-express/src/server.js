const express = require("express");
const path = require("path");
const metrics = require("./metrics");

const app = express();

//We indicate that we will render ejs files
app.set("views", path.join(__dirname, "..", "views"));
app.set("view engine", "ejs");

//Our server will serve up static files
app.use(express.static(path.join(__dirname, "..", "public")));
// Creating a virtual path
app.use("/hello", express.static(path.join(__dirname, "..", "public")));

/************
 * Routing
 ************/

// Home page
app.get("/", (req, res) =>{
   res.render("home");
});

// Hello page
app.get("/hello/:name", (req, res) => {
   const name = req.params.name;

   if (name.toLowerCase() === "jean") {
      res.render("hello-jean");
   } else {
      res.render("hello-stranger", {name: name[0].toUpperCase() + name.slice(1)});
   }
});

app.get("/metrics.json", (req, res) => {
   metrics.get((err, data) => {
      if (err) throw err;

      res.status(200).json(data);
   });
});

app.get("*", (req, res) => {
   res.render("404");
});

app.listen(3000, () => console.log("The server is up! It's listening on the port 3000"));



