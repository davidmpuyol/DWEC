function validarNumero(valor){
	if(isNaN(valor))
		return false;
	return true;
}
function validarString(valor){
	if(valor == "")
		return false;
	return true;
}
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

document.write("You will be a "+jobTitle+" in "+geographicLocation+", and married to "+parentName+" with "+nChildren+ " kids.");