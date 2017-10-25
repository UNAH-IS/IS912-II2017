var express = require("express");
var bodyParser = require("body-parser");
var mysql = require("mysql");

var app = express();
var conexion = mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"asd.456",
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
			"select codigo_usuario_emisor as codigo, mensaje, date_format(fecha_hora,'%H:%i:%S') hora "+
  			"from tbl_mensajes "+
			"where (codigo_usuario_emisor = ? or codigo_usuario_emisor = ?) "+
			"and (codigo_usuario_receptor= ? or codigo_usuario_receptor = ?) ",
			[peticion.body.emisor,peticion.body.receptor,peticion.body.emisor,peticion.body.receptor],
			function(err, filas, campos){
				if (err) throw err;
				respuesta.send(JSON.stringify(filas));
				//respuesta.send("Deberia enviar mensajes");
			}
		);
});

app.post("/enviar-mensaje", urlEncodeParser, function(peticion, respuesta){
	conexion.query(
			"INSERT INTO tbl_mensajes (codigo_usuario_emisor,codigo_usuario_receptor, mensaje,fecha_hora) "+
    		"VALUES (?, ? ,? , ?)",
			[	
				peticion.body.emisor,
				peticion.body.receptor,
				peticion.body.mensaje,
				"2016-05-22 13:11:12"
			],
			function(err, resultado, campos){
				if (err) throw err;
				respuesta.send(JSON.stringify(resultado));
				//respuesta.send("Deberia enviar mensajes");
			}
		);
});

app.get("/mensajes/:emisor/:receptor", function(peticion, respuesta){
	conexion.query(
			"select codigo_usuario_emisor as codigo, mensaje, date_format(fecha_hora,'%H:%i:%S') hora "+
  			"from tbl_mensajes "+
			"where (codigo_usuario_emisor = ? or codigo_usuario_emisor = ?) "+
			"and (codigo_usuario_receptor= ? or codigo_usuario_receptor = ?) ",
			[peticion.params.emisor,peticion.params.receptor,peticion.params.emisor,peticion.params.receptor],
			function(err, filas, campos){
				if (err) throw err;
				respuesta.send(JSON.stringify(filas));
				//respuesta.send("Deberia enviar mensajes");
			}
		);
});


app.get("/[0-9]{5}",function(peticion,respuesta){
	respuesta.send("La url es validad para la expresion regular: [0-9]{5}");
});


app.listen(3000);
