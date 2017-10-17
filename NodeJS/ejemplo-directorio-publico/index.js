var express = require("express");
var app = express();

app.use(express.static("www"));

app.get("/",function(peticion, respuesta){
	respuesta.send("Hola mundo con express");
});

app.listen(3000);
