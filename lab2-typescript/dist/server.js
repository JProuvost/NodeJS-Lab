"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path = require("path");
const metrics = require("./metrics.ts");
const app = express_1.default();
// Defining that we are using ejs for rendering
app.set("views", path.join(__dirname, "..", "views"));
app.set("view engine", "ejs");
// Serving up static files
app.use(express_1.default.static(path.join(__dirname, "..", "public")));
// Defining a virtual path
app.use("/hello", express_1.default.static(path.join(__dirname, "..", "public")));
app.get("/", (req, res) => {
    res.render("home");
});
app.get("/hello/:name", (req, res) => {
    const name = req.params.name;
    if (name.toLowerCase() === "jean") {
        res.render("hello-jean");
    }
    else {
        res.render("hello-stranger", { name: name[0].toUpperCase() + name.slice(1) });
    }
});
app.get("/metrics.json", (req, res) => {
    metrics.get((err, data) => {
        if (err)
            throw err;
        res.status(202).json(data);
    });
});
app.get("*", (req, res) => {
    res.render("404");
});
app.listen(3000, () => console.log("The server is up! It's listening on the port 3000"));
//# sourceMappingURL=server.js.map