<?php
	echo "Desde PHP: " . $_POST["mensaje"] . ", ".$_POST["emisor"].", ".$_POST["receptor"];
	$archivo = fopen("../data/conversaciones/conversaciones-".
			$_POST["emisor"].
			"/conversacion-".
			$_POST["emisor"]."-".
			$_POST["receptor"].".csv"
			, "a+");
	fwrite($archivo, sprintf("%s,%s,%s",$_POST["emisor"],$_POST["mensaje"],date('%H%i%s')));
	fclose($archivo);


?>


