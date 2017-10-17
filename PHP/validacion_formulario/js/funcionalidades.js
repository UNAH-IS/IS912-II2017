function guardarRegistro(){
	var errores = false;
	var listaErrores = "";
	if(document.getElementById("txt-nombre").value){
		document.getElementById("txt-nombre").style.borderColor = "#ccc";
	}else{
		document.getElementById("txt-nombre").style.borderColor = "#FF0000";
		errores = true;
		listaErrores +="<li>El campo nombre esta vacio</li>";
	}

	if(document.getElementById("txt-apellido").value){
		document.getElementById("txt-apellido").style.borderColor = "#ccc";
	}else{
		document.getElementById("txt-apellido").style.borderColor = "#FF0000";
		errores = true;
		listaErrores +="<li>El campo apellido esta vacio</li>";
	}

	if (errores){
		document.getElementById("resultado-validacion").innerHTML = "<ul>"+listaErrores+"</ul>";
	}else{
		document.getElementById("resultado-validacion").innerHTML = "Registro almacenado con exito";
		document.getElementById("tbl-registros").innerHTML += 
		"<tr><td>"+document.getElementById("txt-nombre").value+"</td><td>"+document.getElementById("txt-apellido").value+"</td></tr>";
	}

}