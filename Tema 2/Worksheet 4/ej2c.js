function contarImagenes(){
    document.getElementById("nImagenes").innerHTML = "La página contiene "+document.images.length+" imágenes.";
}

function idPrimeraImagen(){
    document.getElementById("idImagen").innerHTML = "El id de la primera imagen es "+document.images.item(0).id;
}

function nEnlaces(){
    document.getElementById("nEnlaces").innerHTML = "El número de enlaces de pa página es "+document.links.length;
}