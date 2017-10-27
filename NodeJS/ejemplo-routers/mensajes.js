var express = require("express");
var router = express.Router();

router.get("/enviar/:mensaje",function(peticion, respuesta){
	respuesta.send("El mensaje a enviar es " + peticion.params.mensaje);
});

router.get("/eliminar-conversacion/:id",function(peticion, respuesta){
	respuesta.send("Eliminar la conversacion con ID " + peticion.params.id);
});

module.exports = router;