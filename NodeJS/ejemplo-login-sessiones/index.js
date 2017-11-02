var express = require("express");
var session = require("express-session");
var bodyParser = require("body-parser");
var sha1 = require("sha1");
var app = express();
var urlEncodedParser = bodyParser.urlencoded({extended:false});

//Midleware de seguridad
function verificarAutenticacion(peticion, respuesta, next){
	if(peticion.session.usuario)
		return next();
	else
		respuesta.send("ERROR, ACCESO NO AUTORIZADO");
}

app.use(session({secret:'Hola',resave:true,saveUninitialized:true}));

app.use(express.static("public"));
var publicAdmin = express.static("public-admin");

app.use(function(peticion,respuesta,next){
	if (peticion.session.usuario)
		publicAdmin(peticion,respuesta,next);
	else
		return next();
});


app.post("/login", urlEncodedParser, function(peticion, respuesta){
		if(peticion.body.usuario == 'pmartinez' && sha1(peticion.body.password) == 'bcdcb29ed2aab16d48c11485264df665e906bdd9'){
			peticion.session.usuario = peticion.body.usuario;
			peticion.session.password = sha1(peticion.body.password);
			respuesta.send({status:1,mensaje:"Accedio correctamente"});
		}else{
			peticion.session.destroy();
			respuesta.send({status:0,mensaje:"401 Acceso no autorizado"});
		}
		
});

app.get("/logout", function(peticion, respuesta){
		peticion.session.destroy();
		respuesta.sendFile(__dirname+"/public/index.html");
});

app.get("/ruta-segura1",verificarAutenticacion,function(peticion, respuesta){
	respuesta.send("Ruta 1. No se deberia visualizar o acceder a esta ruta si no esta autenticado");
});

app.get("/ruta-segura2",verificarAutenticacion,function(peticion, respuesta){
	respuesta.send("Ruta 2: No se deberia visualizar o acceder a esta ruta si no esta autenticado");
});

app.get("/get-session",function(peticion, respuesta){
	respuesta.send(JSON.stringify(peticion.session));
});

app.get("/set-session",function(peticion, respuesta){
	peticion.session.usuario = 'pmartinez';
	peticion.session.password = sha1('asd.456');
	respuesta.send("Se creo la session: " + JSON.stringify(peticion.session));
});

app.listen(3000);
/*

peticion.cookies //Cookies
peticion.body //POST
peticion.query //GET

*/