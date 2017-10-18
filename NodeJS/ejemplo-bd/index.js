var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');

var app = express();

var conexion = mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"",
	database:"telegram_db"
});

app.get("/query",function(peticion, respuesta){
	conexion.query("SELECT codigo_usuario, nombre, fotografia FROM tbl_usuarios", function(err, filas, campos){
		var resultado = "";
		for (var i = 0; i < filas.length; i++) {
			resultado+="Nombre: "+filas[i].nombre+"<br>";
		}
		respuesta.writeHead(200,{"Content-Type":"text/html"});
		respuesta.write(resultado);	
		respuesta.end();
		
	});
});


app.listen(3000);