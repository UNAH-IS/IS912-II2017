//Modulo http lo utilizaremos para crear nuestro servidor.
var http = require("http");
var url = require("url");
var fs = require("fs");


//Callbacks
http.createServer(function(peticion,respuesta){
	console.log("Se recibio una peticion: " + peticion.url);
	var p = url.parse(peticion.url,true);
	if (p.pathname=="/paginas/pagina1.html" || p.pathname=="/paginas/pagina2.html"){
		fs.readFile("."+p.pathname,function(err,data){
			respuesta.writeHead(200,{"Content-Type": "text/html"}); //MIME Type
			respuesta.write(data);
			respuesta.end();
		});	
	}else{
		respuesta.writeHead(404,{"Content-Type": "text/html"}); //MIME Type
			respuesta.write("404");
			respuesta.end();
	}
}).listen(8081);


console.log("Servidor levantado");
