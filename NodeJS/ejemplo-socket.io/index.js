var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);

app.get("/",function(peticion, respuesta){
	respuesta.sendFile(__dirname + "/index.html");
});

io.on('connection',function(socket){
	console.log("Se conecto un nuevo usuario");
	setTimeout(function(){
		socket.send("Este es un mensaje retardado desde el servidor");
	},4000);

	socket.on("enviar-mensaje", function(data){
		console.log(data);
	});

	socket.emit("mensaje-servidor","Este es el mensaje del servidor");
});

http.listen(3000);