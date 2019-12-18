function calcular(){
    let a = parseInt(prompt("Introduce el valor de a"));
    let b = parseInt(prompt("Introduce el valor de b"));
    let c = parseInt(prompt("Introduce el valor de c"));
    let determinante = Math.pow(b,2)-4*a*c;
    if(determinante>0){
        let r1 = (-b+Math.sqrt(determinante))/2*a;
        let r2 = (-b-Math.sqrt(determinante))/2*a;
        document.getElementById("solucion").innerHTML = "Los posibles resultados son "+r1+" y "+r2;
    }
    else if(determinante == 0){
        let r1 = -b/2*a;
        document.getElementById("solucion").innerHTML = "El valor de X es "+r1;
    }
    else{
        document.getElementById("solucion").innerHTML = "No hay soluciones posibles";
    }
}
