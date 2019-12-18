document.write("Número aleatorio entre 0 y 1: "+parseInt(Math.random()*2)+"<br>");
document.write("Número aleatorio entre 100 y 200: "+parseInt(Math.random()*101+100));

function pedirNumeros(){
    let n1 = parseInt(prompt("Introduce un valor"));
    let n2 = parseInt(prompt("Introduce otro valor"));
    let mayor = Math.max(n1,n2);
    let menor = Math.min(n1,n2);
    document.getElementById("aleatorio").innerHTML = "Número aleatorio entre "+menor+" y "+mayor+": "
    +parseInt(Math.random()*(mayor-menor)+menor);
}
