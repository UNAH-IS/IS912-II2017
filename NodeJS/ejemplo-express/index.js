var express = require("express");
var app = express();

app.get("/",function(peticion, respuesta){
	respuesta.send("Hola mundo con express");
});

app.get("/pagina1",function(peticion, respuesta){
	respuesta.send("Pagina 1");
});

app.get("/pagina2",function(peticion, respuesta){
	respuesta.send("Pagina 2");
});

app.get("/ab*cd",function(peticion, respuesta){
	respuesta.send("Cualquier contenido que cumpla el patron ab*cd");
});

app.listen(3000);
