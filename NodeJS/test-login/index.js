var express = require("express");
var session = require("express-session");
var app = express();

app.use(session({secret:"hola",resave:true,saveUninitialized:true}));
app.use(express.static("public"));
var adminAccess = express.static("public-admin");

app.use(function(req,res,next){
	if (req.session.usuario)
		adminAccess(req,res,next);
	else
		return next();
});

function verificarAutorizacion(req,res,next){
	if(req.session.usuario)
		return next();
	else{
		return res.sendStatus(401);
	}

}

app.get("/set-session",function(req,res){
	req.session.usuario = 'jperez';
	res.send("Session iniciada");
});

app.get("/get-session",function(req,res){
	res.send("Usuario: " + req.session.usuario);
});

app.get("/pagina-restringida",verificarAutorizacion,function(req,res){
	res.send("Bienvenido estas viendo información confidencial porque tienes acceso");
});

app.get("/destroy-session",function(req,res){
	req.session.destroy();
	res.send("Session destruida");
});

/*
app.get("",function(req,res){});
*/

app.listen(3000);