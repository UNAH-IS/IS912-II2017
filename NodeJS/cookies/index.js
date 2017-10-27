var express = require("express");
var cookieParser = require("cookie-parser");
var app = express();

app.use(cookieParser());

app.get("/set-cookie",function(req, res){
	res.cookie('nombre', 'Juan').send('Se agrego una cookie');
});

app.get("/view-cookie",function(req, res){
	res.send("Cookie guardada: " + req.cookies.nombre);
});

app.listen(3000);