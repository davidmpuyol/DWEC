function actualizarReloj(){
    
}

function reloj(){
    setTimeout(function(){
        let fecha = new Date();
        document.getElementById("reloj").innerHTML = "<h2>"+fecha.getHours()
        +":"+fecha.getMinutes()+":"+fecha.getSeconds();
        reloj();
    },1000)
}