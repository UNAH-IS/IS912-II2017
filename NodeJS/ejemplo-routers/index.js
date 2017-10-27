var express = require("express");
var app = express();
var usuarios = require("./usuarios");
var mensajes = require("./mensajes");

app.use("/usuarios",usuarios);
app.use("/mensajes",mensajes);

app.get("/",function(peticion, respuesta){
	respuesta.send("Hola mundo con express");
});

app.listen(3000);