var express = require("express")
var app = express()
var ejs = require("ejs")
var port = process.env.PORT || 3000;
app.set("view-engine", "ejs")
app.use(express.static("public"))

app.get('/robots.txt', function (req, res) {
    res.type('text/plain');
    res.send("User-agent: *\nDisallow: /");
});

app.get("/", function(req,res){
  res.render("index.ejs")
})

app.get("/hi", function(req,res){
  res.render("missingno1.ejs")
})

app.listen(port, function(){
  console.log("heyy, i'm listening...")
})
