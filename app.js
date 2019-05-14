const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.use(express.static("public/stylesheets"));

app.get("/", (req,res) => {
    res.render("landing");
})

app.get("/ourstory", (req,res) => {
    res.render("OurStory");
})

app.get("/thewedding", (req,res) => {
    res.render("TheWedding");
})

app.listen(process.env.port || 3000, () =>{
    console.log("Server started running.")
})