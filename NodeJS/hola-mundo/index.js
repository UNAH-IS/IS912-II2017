var http = require("http");

http.createServer(function(peticion, respuesta){
	console.log("Peticion recibida");
	respuesta.writeHead(200, {"Content-Type":"text/html"});
	respuesta.write("<html><head></head><body><h1>Hola Mundo</h1></body></html>");
	respuesta.end();
}).listen(3000);

console.log("Esperando peticiones");