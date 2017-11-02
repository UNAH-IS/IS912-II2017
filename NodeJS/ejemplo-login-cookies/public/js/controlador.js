$("#btn-login").click(function(){
	$.ajax({
		url:"/login",
		data:"usuario="+$("#txt-usuario").val()+"&password="+$("#txt-password").val(),
		method:"POST",
		dataType:"json",
		success:function(respuesta){
			if(respuesta.status==1)
				window.location = "/home.html";
			else
				alert(respuesta.mensaje);
		},
		error:function(err){
			alert("Error " + JSON.stringify(err));
		}
	});
});