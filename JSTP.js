
"use strict"

document.getElementById("caj").style.display = "none";
document.getElementById("caja").style.display = "none";

document.getElementById("boton").onclick = function (){


var TOTAL = 0;

var p11 = document.getElementById("op11");
var p12 = document.getElementById("op12");
var p13 = document.getElementById("op13");

if( p11.checked){

	document.getElementById("opcion11").style.background = "green";
	TOTAL = TOTAL + 1;
		
}

if(p12.checked){
	document.getElementById("opcion12").style.background = "red";
	document.getElementById("opcion11").style.background = "green";
}

if(p13.checked){
	document.getElementById("opcion13").style.background = "red";
	document.getElementById("opcion11").style.background = "green";
}

if (p11.checked == false && p12.checked == false && p13.checked == false){

	document.getElementById("opcion11").style.background = "green";
	document.getElementById("opcion12").style.background = "red";
	document.getElementById("opcion13").style.background = "red";
}

var p21 = document.getElementById("pr2");

if( p21.value == "0"){

	document.getElementById("pr2").style.background = "green";
	TOTAL = TOTAL + 1;
		
}

if( p21.value == ""){

	document.getElementById("pr2").style.background = "red";
	document.getElementById("pr2").value = "RESPUESTA CORRECTA = 0";
	document.getElementById("pr2").style.color = "white";
		
}

if( p21.value != "0" && p21.value != ""){

	document.getElementById("pr2").style.background = "red";
	document.getElementById("pr2").value = "RESPUESTA CORRECTA = 0";
	document.getElementById("pr2").style.color = "white";
		
}

var p31 = document.getElementById("op31");
var p32 = document.getElementById("op32");
var p33 = document.getElementById("op33");

if( p31.checked){

	document.getElementById("opcion31").style.background = "red";
	document.getElementById("opcion33").style.background = "green";
}

if(p32.checked){
	document.getElementById("opcion32").style.background = "red";
	document.getElementById("opcion33").style.background = "green";
}

if(p33.checked && p31.checked == false && p32.checked == false){
	document.getElementById("opcion33").style.background = "green";
	TOTAL = TOTAL + 1;
}

if(p33.checked && p31.checked && p32.checked == false){
	document.getElementById("opcion33").style.background = "green";
	TOTAL = TOTAL + 0.5;
}

if(p33.checked && p32.checked && p31.checked == false){
	document.getElementById("opcion33").style.background = "green";
	TOTAL = TOTAL + 0.5;
}

if(p33.checked && p31.checked && p32.checked){
	document.getElementById("opcion33").style.background = "green";
	TOTAL = TOTAL + 0.25;
}

if (p31.checked == false && p32.checked == false && p33.checked == false){

	document.getElementById("opcion31").style.background = "red";
	document.getElementById("opcion32").style.background = "red";
	document.getElementById("opcion33").style.background = "green";
}

var p41 = document.getElementById("op41");
var p42 = document.getElementById("op42");
var p43 = document.getElementById("op43");

if( p41.checked){

	document.getElementById("opcion41").style.background = "green";
	TOTAL = TOTAL + 1;
		
}

if(p42.checked){
	document.getElementById("opcion42").style.background = "red";
	document.getElementById("opcion41").style.background = "green";
}

if(p43.checked){
	document.getElementById("opcion43").style.background = "red";
	document.getElementById("opcion41").style.background = "green";
}

if (p41.checked == false && p42.checked == false && p43.checked == false){

	document.getElementById("opcion41").style.background = "green";
	document.getElementById("opcion42").style.background = "red";
	document.getElementById("opcion43").style.background = "red";
}

var p51 = document.getElementById("op51");
var p52 = document.getElementById("op52");
var p53 = document.getElementById("op53"); //falsa

if( p51.checked && p52.checked == false && p53.checked == false){

	document.getElementById("opcion51").style.background = "green";
	document.getElementById("opcion52").style.background = "green";
	TOTAL = TOTAL + 0.5;
}

if(p52.checked && p51.checked == false && p53.checked == false){
	document.getElementById("opcion52").style.background = "green";
	document.getElementById("opcion51").style.background = "green";
	TOTAL = TOTAL + 0.5;
}

if(p53.checked && p51.checked == false && p52.checked == false){
	document.getElementById("opcion53").style.background = "red";
	document.getElementById("opcion52").style.background = "green";
	document.getElementById("opcion51").style.background = "green";
}

if(p51.checked && p52.checked && p53.checked == false){
	document.getElementById("opcion51").style.background = "green";
	document.getElementById("opcion52").style.background = "green";
	TOTAL = TOTAL + 1;
}

if(p51.checked && p53.checked && p52.checked == false){
	document.getElementById("opcion51").style.background = "green";
	document.getElementById("opcion53").style.background = "red";
	document.getElementById("opcion52").style.background = "green";
	TOTAL = TOTAL + 0.25;
}

if(p51.checked == false && p52.checked && p53.checked){
	document.getElementById("opcion51").style.background = "green";
	document.getElementById("opcion52").style.background = "green";
	document.getElementById("opcion53").style.background = "red";
	TOTAL = TOTAL + 0.25;
}

if (p51.checked == false && p52.checked == false && p53.checked == false){

	document.getElementById("opcion51").style.background = "red";
	document.getElementById("opcion52").style.background = "red";
	document.getElementById("opcion53").style.background = "green";
}

if (p51.checked && p52.checked && p53.checked ){

	document.getElementById("opcion51").style.background = "green";
	document.getElementById("opcion52").style.background = "green";
	document.getElementById("opcion53").style.background = "red";
	TOTAL = TOTAL + 0.25;
}

var p61 = document.getElementById("op61");
var p62 = document.getElementById("op62");
var p63 = document.getElementById("op63");

if( p61.checked){

	document.getElementById("opcion61").style.background = "red";
	document.getElementById("opcion62").style.background = "green";
		
}

if(p62.checked){
	document.getElementById("opcion62").style.background = "green";
	TOTAL = TOTAL + 1;
}

if(p63.checked){
	document.getElementById("opcion63").style.background = "red";
	document.getElementById("opcion62").style.background = "green";
}

if (p61.checked == false && p62.checked == false && p63.checked == false){

	document.getElementById("opcion61").style.background = "red";
	document.getElementById("opcion62").style.background = "green";
	document.getElementById("opcion63").style.background = "red";
}

var p71 = document.getElementById("pr7");

if( p71.value == "10"){

	document.getElementById("pr7").style.background = "green";
	TOTAL = TOTAL + 1;
		
}

if( p71.value == ""){

	document.getElementById("pr7").style.background = "red";
	document.getElementById("pr7").value = "RESPUESTA CORRECTA = 10";
	document.getElementById("pr7").style.color = "white";
		
}

if( p71.value != "10" && p71.value != ""){

	document.getElementById("pr7").style.background = "red";
	document.getElementById("pr7").value = "RESPUESTA CORRECTA = 10";
	document.getElementById("pr7").style.color = "white";
		
}

document.getElementById("op11").disabled = true;
document.getElementById("op12").disabled = true;
document.getElementById("op13").disabled = true;

document.getElementById("pr2").disabled = true;

document.getElementById("op31").disabled = true;
document.getElementById("op32").disabled = true;
document.getElementById("op33").disabled = true;

document.getElementById("op41").disabled = true;
document.getElementById("op42").disabled = true;
document.getElementById("op43").disabled = true;

document.getElementById("op51").disabled = true;
document.getElementById("op52").disabled = true;
document.getElementById("op53").disabled = true;

document.getElementById("op61").disabled = true;
document.getElementById("op62").disabled = true;
document.getElementById("op63").disabled = true;

document.getElementById("pr7").disabled = true;


document.getElementById("boton").style.display = "none";
document.getElementById("caj").style.display = "block";
document.getElementById("caja").style.display = "block";
document.getElementById("caja").innerHTML = "RESULTADO: " + TOTAL + "/7";

};
