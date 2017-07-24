$("#slc-usuario").change(function(){
	alert("USUARIO seleccionado: " + $("#slc-usuario").val());
});

function seleccionarContacto(codigoContacto, nombreContacto){
	alert("CONTACTO seleccionado: " + codigoContacto + ", Nombre: " + nombreContacto);
}

$("#btn-enviar").click(function(){
	alert("Enviar mensaje: " + $("#txta-mensaje").val());
});


$(document).ready(function(){
	$.ajax({
		url:"ajax/info.php",
		data:"",
		method:"POST",
		dataType: "json",
		success:function(resultado){
			alert("Resultado: " + resultado);
			alert("Registro 1: " + resultado[0].nombre);
			//$("#slc-usuario").html(resultado);
		},
		error:function(error){
			alert("Error: " + JSON.stringify(error));
		}
	});
});