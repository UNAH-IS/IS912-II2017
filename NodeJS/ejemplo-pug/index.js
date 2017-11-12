var express = require("express");
var app = express();


app.set("view engine","pug");
app.set("views","./views");


app.get("/inicio",function(peticion, respuesta){
	respuesta.render("vista-inicio",{usuario:{nombre:"Juan",apellido:"Perez"}});
	//Transpilar
});

app.listen(3000);