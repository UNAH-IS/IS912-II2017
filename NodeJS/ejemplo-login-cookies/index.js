var express = require("express");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var sha1 = require("sha1");
var app = express();
var urlEncodedParser = bodyParser.urlencoded({extended:false});

app.use(cookieParser());
app.use(express.static("public"));

app.post("/login", urlEncodedParser, function(peticion, respuesta){
		if(peticion.body.usuario == 'pmartinez' && sha1(peticion.body.password) == 'bcdcb29ed2aab16d48c11485264df665e906bdd9'){
			respuesta.cookie("usuario",peticion.body.usuario);
			respuesta.cookie("password",sha1(peticion.body.password));
			respuesta.send({status:1,mensaje:"Accedio correctamente"});
		}else{
			respuesta.clearCookie("usuario");
			respuesta.clearCookie("password");
			respuesta.send({status:0,mensaje:"401 Acceso no autorizado"});
		}
		
});

app.get("/logout", function(peticion, respuesta){
		respuesta.clearCookie("usuario");
		respuesta.clearCookie("password");
		respuesta.sendFile(__dirname+"/public/index.html");
});

app.listen(3000);
/*

peticion.cookies //Cookies
peticion.body //POST
peticion.query //GET

*/