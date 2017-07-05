<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	<?php
		echo "ESta es la pagina PHP que procesara la informacion";
		echo "<br>El correo enviado es: " . $_POST["txt-email"];
		echo "<br>Parametro en GET: " . $_GET["otro-parametro"];
		echo "Se guardara la informacion en un archivo";

		$archivo = fopen("archivo.csv","a+") or die ("No se pudo crear el archivo");
		fwrite($archivo, $_POST["txt-email"]. ",". $_POST["txt-password"]."\n");
		fclose($archivo);
		

	?>
</body>
</html>