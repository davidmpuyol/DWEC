function localizaSubcadena(cadena, subcadena){
    let posicion = 0;
    var resultados = cadena.match("/"+subcadena+"/gi");
    for(let i = 0; i< resultados.length; i++){
        document.write(resultados[i]+"<br>");
    }
}

var cadena = prompt("Introduce una cadena");
var subcadena = prompt("Introduce una subcadena");
localizaSubcadena(cadena, subcadena);