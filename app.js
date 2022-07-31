var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended : true}));
app.set("view engine", "ejs");

var campgrounds = [
    {name: "Carlos Luevano", image: "https://scontent.fagu1-1.fna.fbcdn.net/v/t39.30808-6/219937766_5842816932457343_559195078566856942_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHk9Eyq6Et69y21IdbzdWIyRnhJ8Nc1XSlGeEnw1zVdKZ0jod0GjUVYgWjUDAVbPXeeDMEAQqedSeAcYZp2YXzC&_nc_ohc=Ax1i9RZ9fl8AX_aPdDT&_nc_ht=scontent.fagu1-1.fna&oh=00_AT9vyF74wrmol5GnOXsxVwpZu8e7Ys6lIuvEYTM0MRTZeA&oe=62E8222F"},
    {name: "Esteban Ovalle", image: "https://scontent.fagu1-1.fna.fbcdn.net/v/t1.6435-9/52308654_1132521310250957_5858595963114881024_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFyajbzdV9QnCjfEcaYON10s77zp4PUcW-zvvOng9Rxb3hdhBXCFPzMxO3PChKLfOKBM6tQD1ABUjclBfp9I2qC&_nc_ohc=6amAWVbs-F8AX8Q1ONG&_nc_ht=scontent.fagu1-1.fna&oh=00_AT_FvKmhXK9Cd-4ujfVWom63K_NXz24TbmGFuy0HivQD3g&oe=6308D9B3"},
    {name: "Alejandra Santillan", image: "https://scontent.fagu1-1.fna.fbcdn.net/v/t39.30808-6/277343613_4955451421217338_711071811584474281_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGNYI1GFcHakWjx7l4TmpNonmg6b039HE-eaDpvTf0cT_MzSzME09AtB1Td6W6ED03YiFoxmjxZz3BC4FYMf06g&_nc_ohc=wDur74V_i14AX-Gzh7b&_nc_ht=scontent.fagu1-1.fna&oh=00_AT-Gtf_OrgCUlkFYU40FvCL6bpfUO_a1DCuMF0CdA3-kyw&oe=62E82B9C"},
    {name: "Carlos Luevano", image: "https://scontent.fagu1-1.fna.fbcdn.net/v/t39.30808-6/219937766_5842816932457343_559195078566856942_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHk9Eyq6Et69y21IdbzdWIyRnhJ8Nc1XSlGeEnw1zVdKZ0jod0GjUVYgWjUDAVbPXeeDMEAQqedSeAcYZp2YXzC&_nc_ohc=Ax1i9RZ9fl8AX_aPdDT&_nc_ht=scontent.fagu1-1.fna&oh=00_AT9vyF74wrmol5GnOXsxVwpZu8e7Ys6lIuvEYTM0MRTZeA&oe=62E8222F"},
    {name: "Esteban Ovalle", image: "https://scontent.fagu1-1.fna.fbcdn.net/v/t1.6435-9/52308654_1132521310250957_5858595963114881024_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFyajbzdV9QnCjfEcaYON10s77zp4PUcW-zvvOng9Rxb3hdhBXCFPzMxO3PChKLfOKBM6tQD1ABUjclBfp9I2qC&_nc_ohc=6amAWVbs-F8AX8Q1ONG&_nc_ht=scontent.fagu1-1.fna&oh=00_AT_FvKmhXK9Cd-4ujfVWom63K_NXz24TbmGFuy0HivQD3g&oe=6308D9B3"},
    {name: "Alejandra Santillan", image: "https://scontent.fagu1-1.fna.fbcdn.net/v/t39.30808-6/277343613_4955451421217338_711071811584474281_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGNYI1GFcHakWjx7l4TmpNonmg6b039HE-eaDpvTf0cT_MzSzME09AtB1Td6W6ED03YiFoxmjxZz3BC4FYMf06g&_nc_ohc=wDur74V_i14AX-Gzh7b&_nc_ht=scontent.fagu1-1.fna&oh=00_AT-Gtf_OrgCUlkFYU40FvCL6bpfUO_a1DCuMF0CdA3-kyw&oe=62E82B9C"}

];

app.use(express.static('views/partials'));

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    res.render("campgrounds",{campgrounds:campgrounds});
});

app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
});

app.post("/campgrounds", function(req, res){
    // get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newCampgrounds = {name: name, image: image};
    campgrounds.push(newCampgrounds);
    //redirect bak to campgrounds page
    res.redirect("/campgrounds");
});

const PORT = 3000;
app.listen(PORT, function(){
    console.log("The YelpCamp Server Has Started and Runing in port: 3000");
});