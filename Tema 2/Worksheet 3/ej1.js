//document.getElementById("temporizador").innerHTML = "<h2>60</h2>";
function invierteCadena(c){
	let cadena = "";
	for(let i = c.length-1; i>=0;i--){
		alert(i);
		cadena += c.charAt(i);
	}
	return cadena;
}

function inviertePalabras(cadena){
	let cadenaInvertida = "";
	cadena = cadena.split(" ");
	for(let i = cadena.length-1; i>=0;i--){
		cadenaInvertida += cadena[i]+" ";
	}
	return cadenaInvertida;
}

function encuentraPalabraMasLarga(cadena){
	cadena = cadena.split(" ");
	let posicion;
	let longitud = 0;
	for(let i = 0; i < cadena.length; i++){
		if(cadena[i].length > longitud){
			posicion = i;
			longitud = cadena[i].length;
		}
	}
	return cadena[posicion];
}

function filtraPalabrasMasLargas(cadena, longitud){
	cadena = cadena.split(" ");
	let contador = 0;
	for(let i = 0; i < cadena.length; i++){
		if(cadena[i].length > longitud){
			contador++;
		}
	}
	return contador;
}

function cadenaBienFormada(cadena){
	let cadenaFinal;
	cadenaFinal = cadena.substring(0,1).toUpperCase()+cadena.substring(1);
	return cadenaFinal;
}

var cadena = prompt("Introduce una cadena");
cadenaBienFormada(cadena);