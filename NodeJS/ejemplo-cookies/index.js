var express = require("express");
var cookieParser = require("cookie-parser");
var app = express();


app.use(cookieParser());

app.get("/set-cookie",function(peticion, respuesta){
		respuesta.cookie("usuario","jperez");
		respuesta.send("Cookie almacenada");
});

app.get("/get-cookie",function(peticion, respuesta){
		respuesta.send("Valor de la cookie usuario almacenada en el cliente: "+
			peticion.cookies.usuario);
});


app.listen(3000);
/*

peticion.cookies //Cookies
peticion.body //POST
peticion.query //GET

*/