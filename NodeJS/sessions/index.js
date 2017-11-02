var express = require("express");
var expressSession = require("express-session");
var sha1 = require("sha1");
var app = express();
app.use(expressSession({secret:"Algo secreto",resave:false,saveUninitialized:true}));

app.get("/set-session",function(req, res){
	req.session.variable = sha1("Valor variable");	
	res.send("Se almaceno la variable: " + sha1("Valor variable"));
});


app.get("/get-session",function(req, res){
	res.send("Esta es la variable guardada: "+req.session.variable);	
});

app.listen(3000);