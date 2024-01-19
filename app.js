var express = require('express');
var app = express();
var router = express.Router();
var path = require('path');

//Example of static route
app.use(express.static(__dirname + '/pages'));


// JavaScript for a route 
app.get('/',function(req,res){
    //res.send("Here would be the page from the route");
    res.sendFile(path.join(__dirname + '/pages/index.html'));
});

app.get('/about',function(req,res){
    //res.send("Here would be the page from the route");
    res.sendFile(path.join(__dirname + '/pages/add.html'));
});

app.get('/contact',function(req,res){
    //res.send("Here would be the page from the route");
    res.sendFile(path.join(__dirname + '/pages/login.html'));
});

app.listen(3000, function(){
    console.log("Running on port 3000");
})

