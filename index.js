const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

app.use(express.static(path.join(__dirname,"public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views")); // Ensure correct folder name

// Route for home
app.get("/", (req, res) => {
    res.render("home"); // Render the home.ejs file
});

app.get("/ig/:username", (req, res) => {
    let {username} = req.params; 
   const instaData = require("./data.json");
   const data = instaData[username];
 if (data){
    res.render("instagram.ejs",{ data });
 }else{
    res.render("error.ejs")
 }
  
});

app.get("/hello", (req, res) => {
    res.send("hello");
});

app.get("/rolldice", (req, res) => {
    let diceval = Math.floor(Math.random() * 6) + 1; // Correct dice logic
    res.render("rolldice", { num: diceval }); // Pass dice value to the view
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
