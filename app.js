var express = require("express");
var app = express();
var mongoose = require('mongoose');
var bodyParser = require("body-parser");
var db = require('./db');
var model = require('./models/user');


//Database
db();

app.use(bodyParser.urlencoded({extended : true}));
app.set("view engine", "ejs");

app.use(express.static('views/partials'));

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    model.find({},function(err, users){
        if(err){
            console.log('Error al traer los usuarios');
        } else {
            console.log('Todos los usuarios');
            res.render("campgrounds",{campgrounds:users});
        }
    });
});

app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
});

app.post("/campgrounds", function(req, res){
    // get data from form and add to campgrounds array
    let aux;
    if(req.body.image!=""){
        aux=req.body.image;
    }
    let user = new model({
        name: req.body.name,
        image: aux
    });

    user.save(function(err, users){
        if(err){
            console.log('Error Save!!');
        } else {
            console.log('Successful Saved!!');
        }
    });
    //redirect bak to campgrounds page
    res.redirect("/campgrounds");
});

const PORT = 3000;
app.listen(PORT, function(){
    console.log("The YelpCamp Server Has Started and Runing in port: 3000");
});