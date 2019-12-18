//Funciones para validar la entrada de texto y de valores numéricos;
//Ejercicio 4.10
/*document.write("<h1>PRÁCTICA DE BUCLE FOR</h1>");
for (let i = 1; i <= 6; i++) {
	document.write("<h"+i+">Cabecera h"+i+"</h"+i+">");
}
*/
//Ejercicio 4.11
/*
var nColumns = parseInt(prompt("Introduce el número de columnas"));
var altura = parseInt(prompt("Introduce la altura en píxeles"));
var anchura = parseInt(prompt("Introduce la anchura en píxeles"));
document.write("<table border = \"0\" cellspacing= \"2\" bgcolor= \"black\" width=\"200\">");
document.write("<tr bgcolor=\"white\" height=\""+altura+"\">");
for (let i = 0; i <= nColumns; i++) {
	document.write("<td width= \""+anchura+"\"> </td>");
}
*/
//Ejercicio 4.12
/*
var nColumns = parseInt(prompt("Introduce el número de columnas"));
var altura = parseInt(prompt("Introduce la altura en píxeles"));
var anchura = parseInt(prompt("Introduce la anchura en píxeles"));
document.write("<table border = \"0\" cellspacing= \"2\" bgcolor= \"black\" width=\"200\">");
document.write("<tr bgcolor=\"white\" height=\""+altura+"\">");
for (let i = 0; i <= nColumns; i++) {
	document.write("<td width= \""+anchura+"\"");
	if(i%2 == 0)
		document.write(" bgcolor=\"black\">"); 
	document.write("</td>");
}
*/
//Ejercicio 4.13
/*
var nColumns = parseInt(prompt("Introduce el número de columnas"));
var altura = parseInt(prompt("Introduce la altura en píxeles"));
var anchura = parseInt(prompt("Introduce la anchura en píxeles"));
document.write("<table border = \"0\" cellspacing= \"2\" bgcolor= \"black\" width=\"200\">");
document.write("<tr bgcolor=\"white\" height=\""+altura+"\">");
let i = 0;
while(i<=nColumns){
	document.write("<td width= \""+anchura+"\"> </td>");
	i++;
}
*/
//Ejercicio 4.14
/*
var nColumns = parseInt(prompt("Introduce el número de columnas"));
var altura = parseInt(prompt("Introduce la altura en píxeles"));
var anchura = parseInt(prompt("Introduce la anchura en píxeles"));
document.write("<table border = \"0\" cellspacing= \"2\" bgcolor= \"black\" width=\"200\">");
document.write("<tr bgcolor=\"white\" height=\""+altura+"\">");
let i = 0;
while(i<=nColumns){
	document.write("<td width= \""+anchura+"\"");
	if(i%2 == 0)
		document.write(" bgcolor=\"black\">"); 
	document.write("</td>");
	i++;
}
*/
//Ejercicio 15
/*
var num_adivinar = parseInt(prompt("Introduce el número a adivinar"));
var num;
while(num != num_adivinar){
	num = parseInt(prompt("Introduce un número"));
	if(num == num_adivinar)
		alert("Has acertado!!");
	else if (num < num_adivinar)
		alert("Has fallado! El numero es más alto. Prueba otra vez");
	else if (num > num_adivinar)
		alert("Has fallado! El numero es más bajo. Prueba otra vez");
}
*/
//Ejercicio 16
/*
var num_adivinar = parseInt(prompt("Introduce el número a adivinar"));
var num;
do{
	num = parseInt(prompt("Introduce un número"));
	if(num == num_adivinar)
		alert("Has acertado!!");
	else if (num < num_adivinar)
		alert("Has fallado! El numero es más alto. Prueba otra vez");
	else if (num > num_adivinar)
		alert("Has fallado! El numero es más bajo. Prueba otra vez");
}while(num != num_adivinar)
*/
//Ejercicio 17
/*
for (let i = 0; i <= 10; i++) {
	document.write("<h3>Tabla del "+i+"</h3>");
	for (let j = 1; j<=10; j++){
		document.write(i+"x"+j+"="+(i*j));
		document.write("<br>");
	}
	document.write("<br>");
}
*/
//Ejercicio 18
/*
var nColumns = parseInt(prompt("Introduce el número de columnas"));
var nRows = parseInt(prompt("Introduce el número de filas"));
var altura = parseInt(prompt("Introduce la altura en píxeles"));
var anchura = parseInt(prompt("Introduce la anchura en píxeles"));
document.write("<table border = \"1\" cellspacing= \"2\" bgcolor= \"white\">");
for (let i = 0; i < nRows; i++) {
	document.write("<tr height= \""+altura+"\">");
	for(let j = 0; j < nColumns; j++){
		document.write("<td width= \""+anchura+"\">&nbsp;</td>");
	}
	document.write("</tr>");
}
document.write("</table>");
*/
//Ejercicio 19
var anchura = parseInt(prompt("Introduce la anchura en píxeles"));
document.write("<table border = \"0\" border-collapse: collapse cellspacing= \"2\" bgcolor= \"white\">");
for (let i = 0; i < 8; i++) {
	document.write("<tr height= \""+anchura+"\">");
	for(let j = 0; j < 8; j++){
		document.write("<td width= \""+anchura+"\" ");
			if((i+j)%2==0)
				document.write("bgcolor=\"black\"");
		document.write(">&nbsp;</td>");
	}
	document.write("</tr>");
}
document.write("</table>");