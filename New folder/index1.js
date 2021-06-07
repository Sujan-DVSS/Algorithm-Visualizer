const express = require("express");
const bodyParser = require("body-parser");
const app = express();
// const ejs = require("ejs");
app.set('view engine','ejs');
app.use("/public",express.static(__dirname+'/public'));

app.get("/Searching_selection",(req,res)=>{
  res.render("selection",{link1:"/Searching_t",link2:"/Searching_p"});

});
app.get("/Sorting_selection",(req,res)=>{
  res.render("selection",{link1:"/Sorting_t",link2:"/Sorting_p"});

});
app.get("/", function(req, res){
  res.sendFile(__dirname+"/index.html")
});

app.get("/about", function(req, res){
  res.sendFile(__dirname+"/about.html")
});

app.get("/home",(req,res)=>{
  res.sendFile(__dirname+"/index.html")
});

app.get("/Pathfinding",function(req,res){
  res.sendFile(__dirname+"/pathfinding_p.html")
});

app.get("/Searching_t", (req,res)=>{
  res.sendFile(__dirname+"/search.html")
});

app.get("/Searching_p",(req,res)=>{
  res.sendFile(__dirname+"/search_.html")
});

app.get("/Sorting_t", (req,res)=>{
  res.sendFile(__dirname+"/sorting.html")
});

app.get("/Sorting_p",(req,res)=>{
  res.sendFile(__dirname+"/sorting_.html")
});


app.listen(3000, function(){
console.log("hello");
});
