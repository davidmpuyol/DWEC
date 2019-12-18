//Funciones para validar la entrada de texto y de valores numéricos;
function validarNumero(valor){
	if(isNaN(valor) || valor == "")
		return false;
	return true;
}
function validarString(valor){
	if(valor == "")
		return false;
	return true;
}
function tellFortune(){
var parentName = "";
var geographicLocation = "";
var jobTitle = "";

var nChildren = parseInt(prompt("How many childrends do you have?"));
while(!validarNumero(nChildren)){
	nChildren = parseInt(prompt("How many childrends do you have?, Introduce only numbers"));
}

while(!validarString(parentName)){
	parentName = prompt("What is your parent name?");
}

while(!validarString(geographicLocation)){
	geographicLocation = prompt("What is your geographic location?");
}

while(!validarString(jobTitle)){
	jobTitle = prompt("What is your job title?");
}

//document.write("You will be a "+jobTitle+" in "+geographicLocation+", and married to "+parentName+" with "+nChildren+ " kids.");
document.getElementById("fortune").innerHTML = "<b>You will be a "+jobTitle+" in "+geographicLocation+", and married to "+parentName+" with "+nChildren+ " kids.</b>";
}

function calculateAge(){
	var bYear = "X";
	var cYear = "X";
	var years;
	while(!validarNumero(bYear)){
		bYear = parseInt(prompt("Introduce you birth year"));
	}

	cYear = new Date().getFullYear();

	if(cYear < bYear)
		document.getElementById("age").innerHTML = "Aún no has nacido!";
	else
		document.getElementById("age").innerHTML = "<b>You are either " + (cYear - bYear - 1) + " or " + (cYear - bYear) + " years.</b>";
}

function calculateSupply(){
	const maxAge = 100;
	var age = "O";
	var amountPerDay = "O";
	while(!validarNumero(age)){
		age = parseFloat(prompt("Introduce your age"));
	}
	while(!validarNumero(amountPerDay)){
		amountPerDay = parseFloat(prompt("Introduce the amount per day"));
	}
	var supply = Math.ceil((maxAge - age)*365*amountPerDay);
	document.getElementById("supply").innerHTML = "<b>You will need "+supply+ " to last you until the ripe old age of "+maxAge+"</b>";
}

function calcCircumference(radius){
	var circunference = 2*Math.PI*radius;
	alert("The circunference is "+circunference);
}

function calcArea(radius){
	var area = Math.PI*Math.pow(radius,2);
	alert("The area is "+area);
}

function celsiusToFahrenheit(cTemp){
	let fTemp = cTemp*1.8+32;
	return fTemp;
}

function fahrenheitToCelsius(fTemp){
	let cTemp = (fTemp-32)*1.8;
	return cTemp; 
}

function tempConversion(){
	var grades = parseFloat(prompt("Introduce a value"));
	document.getElementById("conversion").innerHTML = "<b>"+grades+"ºC is "+celsiusToFahrenheit(grades)+"ºF"+ " and "+grades+"ºF is "+fahrenheitToCelsius(grades)+"ºC</b>";
}