var express = require("express");
var session = require("express-session");
var app = express();

app.use(session({secret:"ASDFE$%#%",resave:true, saveUninitialized:true}));

app.get("/",function(peticion, respuesta){
	respuesta.send("Pagina principal");
});

app.get("/set-session/:mensaje",function(peticion, respuesta){
	peticion.session.mensaje=peticion.params.mensaje;
	respuesta.send("Se almaceno la variable de session");
});


app.get("/get-session",function(peticion, respuesta){
	respuesta.send("Mensaje: " + peticion.session.mensaje);
});

app.get("/destroy-session",function(peticion, respuesta){
	peticion.session.destroy();
	respuesta.send("Sesion eliminada");
});
app.listen(3000);