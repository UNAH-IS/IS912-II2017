var express = require("express");
var app = express();

app.set("view engine","pug");
app.set("views","./views");


app.get("/inicio",function(req,res){
	res.render("inicio",{name:"Pedro",apellido:"Perez",carrera:{nombre:"Ing Sistemas",codigo:"115"}});
});


app.listen(3000);