var imagenPulsada = false;
var imagen;
var derecha, altura;
var x,y;
function ratonPulsado(event){
    imagenPulsada = !imagenPulsada;
    imagen = event.target;
    derecha = x-imagen.hspace;
    altura = y-imagen.vspace;
}

function mouseMove(event){
    x = event.clientX;
    y = event.clientY;
    if(imagenPulsada){
        imagen.hspace = x-derecha;
        imagen.vspace = y-altura;
    }
}