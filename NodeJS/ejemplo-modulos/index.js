var http = require("http");
var modulo1 = require("./modulo1");


http.createServer(function(peticion, respuesta){
	modulo1.holaMundo();
	respuesta.writeHead(200,{"Content-Type":"text/html"});
	respuesta.write("Prueba modulo, (Cambio)");
	respuesta.end();
	
}).listen(8081);