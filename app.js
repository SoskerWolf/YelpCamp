var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser");
// Database
var mongoose    = require('mongoose'),
    db          = require('./db'),
    Campground  = require('./models/user');
db();


app.use(bodyParser.urlencoded({extended : true}));
app.set("view engine", "ejs");
app.use(express.static('views/partials'));

//HOME
app.get("/", function(req, res){
    res.render("landing");
});

//INDEX - Show all Campgrounds
app.get("/campgrounds", function(req, res){
    //Get all campgrounds from DB
    Campground.find({},function(err, allCampgrounds){
        if(err){
            console.log('Error al traer los usuarios');
        } else {
            console.log('Todos los usuarios');
            res.render("index",{campgrounds:allCampgrounds});
        }
    });
});

//NEW - Show form to create campground new
app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
});

// CREATE - Add new campground to DB
app.post("/campgrounds", function(req, res){
    // get data from form and add to campgrounds array
    let aux;
    if(req.body.image!=""){
        aux=req.body.image;
    }
    let camp = new Campground({
        name: req.body.name,
        image: aux,
        description: req.body.description
    });
    camp.save(function(err, users){
        if(err){
            console.log('Error Save!!');
        } else {
            console.log('Successful Saved!!');
        }
    });
    //redirect bak to campgrounds page
    res.redirect("/campgrounds");
});

//SHOW - Show a campground
app.get("/campgrounds/:id", function(req, res){
    //find the camground with provided ID
    Campground.findById(req.params.id, function(err, foundCampground){
        if(err){
            console.log(err);
        } else {
            console.log(foundCampground.name);
            //read show template with that campground
            res.render("show", {campground:foundCampground});
        }
    });
});

const PORT = 3000;
app.listen(PORT, function(){
    console.log("The YelpCamp Server Has Started and Runing in port: 3000");
});