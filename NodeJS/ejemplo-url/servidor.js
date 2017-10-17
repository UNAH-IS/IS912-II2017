//Modulo http lo utilizaremos para crear nuestro servidor.
var http = require("http");
var url = require("url");

http.createServer(function(peticion,respuesta){
	console.log("Se recibio una peticion: " + peticion.url);
	var p = url.parse(peticion.url,true);

	if (p.pathname=="/pagina1"){
		respuesta.writeHead(200, {"Content-Type":"text/html"});
		respuesta.write("<h1>Pagina 1</h1><p>Contenido pagina 1</p>");
		respuesta.write("<br>URL: "+peticion.url);
	} else if (p.pathname=="/pagina2"){
		respuesta.writeHead(200, {"Content-Type":"text/html"});
		respuesta.write("<h1>Pagina 2</h1><p>Otro contenido</p>");
		respuesta.write("<br>URL: "+peticion.url);
	}else{
		respuesta.writeHead(404, {"Content-Type":"text/html"});
	}

	respuesta.write("<br>Host: "+p.host);
	respuesta.write("<br>Path: "+p.pathname);
	respuesta.write("<br>Search: "+p.search);
	respuesta.write("<br>Parametro1: "+p.query.parametro1);



	respuesta.end();
}).listen(8081);


console.log("Servidor levantado");