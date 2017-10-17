// Comentarios de una linea
/*
Comentarios de multiples lineas
*/
var a; //Undefined
b = 'Juan';
for (var i=0;i<10;i++)
	document.write('<strong>Hola ' + b + '</strong><br>');

alert("Este es un cuadro de dialogo");
console.log("Este es un mensaje en la consola de javascript");

function enviarInformacion(a,b){
	alert("Se enviara la informacion " + a + " y " + b);
}

var enviarInformacionInputs = function (){
	alert("Nombre: " + document.getElementById("txt-nombre").value);
	alert("Apellido: " + document.getElementById("txt-apellido").value);
}

function asignarValor(){
	document.getElementById("txt-nombre").value = 'Matusalen';
	document.getElementById("txt-apellido").value = 'Rodriguez';
}

function mouseOver(){
	console.log("Evento Mouse Over ");
}
function mouseEnter(){
	console.log("Evento Mouse Enter");
	document.getElementById("div-contenido").style.backgroundColor = "#FF0000";
}
function mouseLeave(){
	console.log("Evento Mouse Leave");
	document.getElementById("div-contenido").style.backgroundColor = "#000000";
}

function cambiarContenidoDiv(){
	document.getElementById("div-contenido").innerHTML += "<b>Lorem ipsum, contenido modificado</b><img src='img/fb-logo.png'>";
}

function redireccionar(){
	window.location="http://google.hn";
}