function separaVocales(cadena){
    let cadenaVocales = "";
    let cadenaConsonantes = "";
    cadena = cadena.replace(" ","");
    for(let i = 0; i< cadena.length; i++){
        let valor = cadena.charAt(i).toLowerCase();
        if(valor == 'a' || valor == 'e' || valor == 'i' || valor == 'o' || valor == 'u'){
            cadenaVocales += cadena.charAt(i);
        } else{
            cadenaConsonantes += cadena.charAt(i);
        }
    }
    return cadenaVocales+cadenaConsonantes;
}

function contieneRepetidos(cadena){
    let correcto = false;
    while(correcto == false){
        correcto = true;
        for(let i = 0; i<cadena.length;i++){
            if(cadena.charAt(i)==cadena.charAt(i+1)){
                cadena= cadena.substring(0,i)+cadena.substring(i+1,cadena.length);
                correcto = false;
            }
        }
    }
    return cadena;
}

function eliminaRepetidos(cadena){
    let i = 0;
    //while(i < cadena.length-1){
    for(let i = 0; i < cadena.length; i++){
        while(cadena.includes(cadena.charAt(i),i+1)){
            let indice = cadena.lastIndexOf(cadena.charAt(i));
            cadena = cadena.substring(0,indice)+cadena.substring(indice+1,cadena.length-1);
            i--;
        }
    }
    return cadena;
}

function eliminaEspaciosRepetidos(cadena){
    let correcto = false;
    while(correcto == false){
        correcto = true;
        for(let i = 0; i<cadena.length;i++){
            if(cadena.charAt(i)==" " && cadena.charAt(i+1)==" "){
                cadena= cadena.substring(0,i)+cadena.substring(i+1,cadena.length);
                correcto = false;
            }
        }
    }
    return cadena;
}

function esSubcadena(cadena, subcadena){
    let posicion = cadena.search(subcadena);
    let cadenaFinal;
    if(posicion != -1){
        cadenaFinal = cadena.substring(0,posicion)+"<b>"+subcadena+"</b>"+cadena.substring((posicion+subcadena.length),cadena.length);
    }
    else{
        cadenaFinal = "No se han encontrado coincidencias";
    }
    return cadenaFinal;
}

function esPalindromo(cadena){
    var espalindromo = true;
    let inicio = 0;
    let final = cadena.length-1;
    while(inicio < final){
        if(cadena.charAt(inicio)!=cadena.charAt(final)){
            return false;
        }
        inicio++;
        final--;
    }
    return true;
}

function contarPalabras(cadena){
    cadena = cadena.trim();
    cadena = eliminaEspaciosRepetidos(cadena);
    cadena = cadena.split(" ");
    return cadena.length;
}

function formatearPalabra(cadena){
    let tabla = "<table border=\"1\">";
    for(let i = 0; i<cadena.length;i++){
        tabla += "<tr>";
        for(let j = 0; j<cadena.length;j++){
            if(i != 0 && i != cadena.length-1 && j != 0 && j != cadena.length-1)
                tabla += "<td></td>";
            else if(i == cadena.length-1){
                tabla += "<td>"+cadena.charAt((i-j))+"</td>";
            }
            else if(j == cadena.length-1){
                tabla += "<td>"+cadena.charAt((j-i))+"</td>";
            }
            else
                tabla += "<td>"+cadena.charAt((i+j)%cadena.length)+"</td>";
        }
        tabla += "</tr>";
    }
    tabla += "</tabla>";
    return tabla;
}

var cadena = prompt("Introduce una palabra");
document.write(formatearPalabra(cadena));

