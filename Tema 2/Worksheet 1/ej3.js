document.getElementById("temporizador").innerHTML = "60";
function decrementar(){
    let segundo = document.getElementById("temporizador").innerHTML;
        if(segundo == 0){
            tiempo.clearInterval();
        }
        segundo--;
        document.getElementById("temporizador").innerHTML = segundo;
}
function temporizador(){
    var tiempo = setInterval(decrementar,1000);
}