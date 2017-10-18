var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var urlEncodeParser = bodyParser.urlencoded({extended:false});
app.use(express.static("public"));

app.get("/",function(peticion, respuesta){
	respuesta.send("Hola mundo");
});

app.get("/home",function(peticion, respuesta){
	respuesta.send("ESTE es el resultado de la peticion /home");
});

app.get("/login",function(peticion, respuesta){
	var resultado ={
		usuario:peticion.query.usuario,
		contrasena:peticion.query.contrasena
	};

	respuesta.send(JSON.stringify(resultado));
});

app.post("/login",urlEncodeParser,function(peticion, respuesta){
	var resultado ={
		usuario:peticion.body.usuario,
		contrasena:peticion.body.contrasena
	};

	respuesta.send(JSON.stringify(resultado));
});

app.listen(8081);

