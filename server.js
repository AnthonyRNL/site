var express = require("express")
var app = express()
var ejs = require("ejs")
var port = process.env.PORT || 3000;
// app.set("view-engine", "ejs")
app.use(express.static("public"))

app.get("/", function(req,res){
  // res.render("index.ejs")
  res.sendFile("/public/index.html")
})

app.get("/hi", function(req,res){
  // res.render("missingno1.ejs")
  res.sendFile(__dirname + "/public/missingno1.html")
})

app.listen(port, function(){
  console.log("heyy, i'm listening...")
})
