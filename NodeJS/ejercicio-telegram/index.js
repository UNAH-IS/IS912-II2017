var express = require("express");
var bodyParser = require("body-parser");
var mysql = require("mysql");

var app = express();
var conexion = mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"",
	database:"telegram_db"

});

var urlEncodeParser = bodyParser.urlencoded({extended:false});

app.use(express.static("public"));

app.get("/",function(peticion, respuesta){
	respuesta.send("public/index.html");
});

app.get("/usuarios",function(peticion, respuesta){
		conexion.query(
			"SELECT codigo_usuario as codigo, nombre, fotografia as imagen FROM tbl_usuarios",
			function(err, filas, campos){
				respuesta.send(JSON.stringify(filas));
			}
		);

});



app.post("/mensajes", urlEncodeParser, function(peticion, respuesta){
	conexion.query(
			"select codigo_usuario_emisor, mensaje, date_format(fecha_hora,'%H:%i:%S') hora"+
  			"from tbl_mensajes"+
			"where (codigo_usuario_emisor = ? or codigo_usuario_emisor = ?)"+
			"and (codigo_usuario_receptor= ? or codigo_usuario_receptor = ?)",
			[1,2,1,2],
			function(err, filas, campos){
				respuesta.send(JSON.stringify(filas));
			}
		);
});

app.listen(3000);
