//Primer alert para el hola mundo
var mensaje = "Hola Mundo!\nQué facil es incluir 'comillas simples'\ny \"comillas dobles \"";
alert(mensaje);

var arr = [3,4,5];
arr.prueba = "Holaaaaa";

for(let i in arr){
    console.log(i);
}
for(let i of arr){
    console.log(i);
}

function calculo(x){
    return (!x);
}

var x = calculo(12);
console.log(x);