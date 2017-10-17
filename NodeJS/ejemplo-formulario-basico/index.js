var express = require("express");
var app = express();

app.use(express.static("public"));
app.get("/",function(peticion, respuesta){
	respuesta.send("Hola mundo");
});

app.get("/login",function(peticion, respuesta){
	var resultado ={
		usuario:peticion.query.usuario,
		contrasena:peticion.query.contrasena
	};

	respuesta.send(JSON.stringify(resultado));
});

app.listen(8081);

