var express = require("express");
   
var app = express();
app.use(require("./controllers/burgers_controller.js"));
var PORT = process.env.PORT || 3001;

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use("/assets", express.static(__dirname + '/assets'));
var server = app.listen(PORT, function() {
    console.log("app listening at port: " + PORT);
});