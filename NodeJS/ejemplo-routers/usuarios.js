var express = require("express");
var router = express.Router();

router.get("/",function(peticion, respuesta){
	respuesta.send("GET desde el enrutador de usuarios");
});

router.get("/agregar/:nombre",function(peticion, respuesta){
	respuesta.send("Agregar usuario " + peticion.params.nombre);
});

router.get("/eliminar/:id",function(peticion, respuesta){
	respuesta.send("Eliminar usuario " + peticion.params.id);
});

router.post("/",function(peticion, respuesta){
	respuesta.send("POST desde el enrutador de usuarios");
});

module.exports = router;