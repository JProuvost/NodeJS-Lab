import express from "express";

const path = require("path");
const metrics = require("./metrics.ts");

const app = express();

// Defining that we are using ejs for rendering
app.set("views", path.join(__dirname, "..", "views"));
app.set("view engine", "ejs");

// Serving up static files
app.use(express.static(path.join(__dirname, "..", "public")));
// Defining a virtual path
app.use("/hello", express.static(path.join(__dirname, "..", "public")));

app.get("/", (req: express.Request, res: express.Response) => {
    res.render("home");
});

app.get("/hello/:name", (req: express.Request, res: express.Response) => {
   const name: string = req.params.name;

   if (name.toLowerCase() === "jean") {
       res.render("hello-jean");
   } else {
       res.render("hello-stranger", {name: name[0].toUpperCase() + name.slice(1)});
   }
});

app.get("/metrics.json", (req: express.Request , res: express.Response) => {
    metrics.get((err: Error | null, data: object) => {
       if (err) throw err;

       res.status(202).json(data);
    });
});

app.get("*", (req: express.Request, res: express.Response) => {
   res.render("404");
});

app.listen(3000, () => console.log("The server is up! It's listening on the port 3000"));
