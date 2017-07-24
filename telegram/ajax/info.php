<?php
	$resultado=array();
	$archivo = fopen("../data/usuarios.csv","r");
	while(!feof($archivo)){
		$linea = fgets($archivo);
		$partes = explode(",", $linea);
		$usuario["codigo"] = $partes[0];
		$usuario["nombre"] = $partes[1];
		$usuario["imagen"] = $partes[2];
		$resultado[]=$usuario;
		//echo "<option value=".$partes[0].">".$partes[1]."</option>";
	}
	fclose($archivo);
	// var_dump es una funcion que formatea un arreglo en html para visualizarlo y depurar
	//var_dump($resultado);
	echo json_encode($resultado);
/*
JSON (Javascript Object Notation)
resultado: {
	nombre:"Juan",
	apellido:"Perez",
	gustos:["Baleadas","DBZ","Chicas"]
}


alert(resultado.nombre);
XML
<persona>
	<nombre>Juan</nombre>
	<apellido>Perez</apellido>
	<gustos>
		<gusto>Baleadas</gusto>
		<gusto>DBZ</gusto>
		<gusto>Chicas</gusto>
	</gustos>
</persona>*/


?>
