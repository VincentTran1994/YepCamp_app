var express  = require("express");
var app = express();
app.set("view engine ","ejs");
//install body-parser to read data from the body
var body = require("body-parser");
app.use(body.urlencoded({extended: true}));
////install body-parser to read data from the body

//install mongoose in the express web-app
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/Yelp_camp");

//connected with Schema
var camappSchema = new mongoose.Schema({
    name: String,
    image: String
});

var Campground = mongoose.model("Campground", camappSchema);
/*
Campground.create(
    {
        name: "Atlanta South RV Resort",
        image : "http://images.goodsam.com/trailerlifedirectory/largefeatured/1000x/pho_721008718_02.jpg"     
    },
    function(err, campground){
        if(err){
            console.log(err);
        } else {
            console.log("Newly created campground");
            console.log(campground);
        }
    });
    
var campground = [
    {
        name: "Atlanta South RV Resort",
        image : "http://images.goodsam.com/trailerlifedirectory/largefeatured/1000x/pho_721008718_02.jpg"
    },
    {
        name: "Ghost Hill Campground",
        image :"https://assets1.roadtrippers.com/uploads/poi_gallery_image/image/319889310/-strip_-quality_60_-interlace_Plane_-resize_1024x480_U__-gravity_center_-extent_1024x480/poi_gallery_image-image-b1bc08cc-f4e2-41bf-b658-1995619b86e4.jpg"
    },
    {
        name: "Stone Mountain Park Campground",
        image : "http://www.stonemountainpark.com/-/media/Images/HFE/SMP_COM/Hero/Tall-Hero-Slider/tallheroslide-yurt.ashx"
    },
    {
        name: "Sweetwater Creek State Park Camping Area",
        image : "https://2wzlm92dvpgd3a560m9ue6tx-wpengine.netdna-ssl.com/images/sweetwater-creek-state-park-yurts/01-sweetwater-creek-state-park-yurts.jpg"
    },
    {
        name: "Atlanta South RV Resort",
        image : "http://images.goodsam.com/trailerlifedirectory/largefeatured/1000x/pho_721008718_02.jpg"
    },
    {
        name: "Ghost Hill Campground",
        image :"https://assets1.roadtrippers.com/uploads/poi_gallery_image/image/319889310/-strip_-quality_60_-interlace_Plane_-resize_1024x480_U__-gravity_center_-extent_1024x480/poi_gallery_image-image-b1bc08cc-f4e2-41bf-b658-1995619b86e4.jpg"
    },
    {
        name: "Stone Mountain Park Campground",
        image : "http://www.stonemountainpark.com/-/media/Images/HFE/SMP_COM/Hero/Tall-Hero-Slider/tallheroslide-yurt.ashx"
    },
    {
        name: "Sweetwater Creek State Park Camping Area",
        image : "https://2wzlm92dvpgd3a560m9ue6tx-wpengine.netdna-ssl.com/images/sweetwater-creek-state-park-yurts/01-sweetwater-creek-state-park-yurts.jpg"
    }
];

*/
app.get("/",function(req, res){
    res.render("landing.ejs");
});

app.get("/campgrounds", function(req, res){
    res.render("campgrounds.ejs",{campground:campground});
});

app.get("/campgrounds/addCamp", function(req, res) {
    res.render("addCamp.ejs");
});

app.post("/campgrounds", function(req, res){
    //res.send("you hit post request");
    var newCampName = req.body.newCampName;
    var newCampImage = req.body.newCampImage;
    var newCamp ={
        name: newCampName, 
        image: newCampImage
    };
    
    campground.push(newCamp);
    res.redirect("/campgrounds");
});

app.listen(process.env.PORT,process.env.IP, function(){
    console.log("YiepCamp server is stared!");
});