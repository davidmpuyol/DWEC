function disminuirImagen(){
	document.getElementById("imagen").style.width = document.getElementById("imagen").clientWidth*0.85+"px";
	document.getElementById("texto").innerHTML = "Ancho = "+document.getElementById("imagen").clientWidth+"px";
}

function aumentarImagen(){
	document.getElementById("imagen").style.width = document.getElementById("imagen").clientWidth*1.15+"px";
	document.getElementById("texto").innerHTML = "Ancho = "+document.getElementById("imagen").clientWidth+"px";
}