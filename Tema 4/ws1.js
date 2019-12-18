var borrar = false;
var imagenPulsada = false;
var imagen;
function ej1(){
    alert("Div pulsado!");
}

function ej2(){
    var x = window.event.clientX;
    var y = window.event.clientY;
    document.getElementById("ej2").innerHTML = "X: "+x+", Y: "+y;
}

function ratonPulsado(event){
    console.log("click");
    imagenPulsada = !imagenPulsada;
    imagen = event.target;
}

function mouseMove(){
    if(imagenPulsada){
        ancho = imagen.width;
        alto = imagen.height;
        imagen.style.left = window.event.clientX-ancho/2;
        imagen.style.top = window.event.clientY-alto/2;
    }
}

function creaTabla(){
    let tabla = "<table>"
    for(let i = 0; i<50;i++){
        tabla += "<tr>"
        for(let j = 0; j<50;j++){
            tabla += "<td onmouseover=pintaTabla(event) onkeypress=borrarPulsado(event)></td>"
        }
        tabla += "</tr>"
    }
    tabla += "</table>"
    document.getElementById("ej4").innerHTML = tabla;
}

function resetearTabla(){
    creaTabla();
}

function borrarPulsado(event){
    //console.log(event);
    if(event.KeyCode == 80){
        borrar = true;
    }
}

function pintaTabla(event){
    //console.log(event);
    if(event.ctrlKey){
        event.target.style.backgroundColor="blue";
    }
    else if(event.shiftKey){
        event.target.style.backgroundColor="red";
    }else if(borrar){
        event.target.style.backgroundColor="white";
    }
    else{
        event.target.style.backgroundColor="green";
    }
}

window.onload = (event)=>{
    creaTabla();   
}
