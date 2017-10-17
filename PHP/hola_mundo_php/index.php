
<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	<?php
		//Comentario de una linea
		/*Comentario de multiples lineas*/
		$a = "Hola";
		$b = "Mundo";
		echo $a . " " . $b . " desde PHP<br>";

		echo "<ul>"; 
		for ($i=0; $i < 10 ; $i++) { 
			echo "<li>Opcion $i</li>\n"; 
		}
		echo "</ul>"; 

		//Definir un arreglo asignando directamente los valores, los indices se asignan
		//automaticamente
		$arreglo[] = 234;
		$arreglo[] = 45;
		$arreglo[] = 564;
		$arreglo[] = 784;

		//Definir un arreglo vacio para un uso futuro.
		$arreglo2=array();

		//Arreglos asociativos
		$arreglo3["nombre"] = "Pedro";
		$arreglo3["apellido"] = "Perez";

		echo "<br>Nombre completo: " .$arreglo3["nombre"]." ".$arreglo3["apellido"]."<br>";

		for ($i=0;$i<sizeof($arreglo);$i++){
			echo "Valor: " . $arreglo[$i]."<br>";
		}
		echo "<hr>";
		foreach ($arreglo as $key => $value) {
			echo "Valor: " . $value."<br>";
		}

	?>
	<script type="text/javascript">
		document.write("Hola mundo desde Javascript");
	</script>
</body>
</html>
