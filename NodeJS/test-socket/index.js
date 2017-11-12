var express = require("express");
var app = express();
var http = require('http').Server(app);
var io = require("socket.io")(http);

app.get("/",function(req, res){
	res.sendFile(__dirname + "/index.html");
});

io.on("connection",function(socket){
	console.log('Usuario conectado');

	setTimeout(function(){
		socket.send('Se esta enviando este mensaje 4 segundos despues.');
	},4000);

	socket.on('mensaje-cliente',function(data){
		console.log("Mensaje del cliente: "+data);
	});

	socket.on('disconnect',function(){
		console.log('Usuario desconectado');
	})
});

http.listen(3000);