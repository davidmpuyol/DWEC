function getCookies(){
    if(cookies==""){
        createCookie();
    }
    else{
        comprobarUsuario();
    }
}

function createCookie(){
    let nombre = prompt("Introduce tu nombre");
    let fecha = new Date(new Date().getTime() + 5*60*1000);
    console.log("username="+nombre+";"+"expires="+fecha.toUTCString());
    document.cookie = "username="+nombre+";expires="+fecha.toUTCString();
    //document.cookie = "expires="+fecha.toLocaleString();
    //document.cookie = "path=/";
    console.log(document.cookie);
}

function comprobarUsuario(){
    cookies = cookies.split(";");
    let nombre = "";
    cookies.forEach((dato) => {
        dato = dato.split("=");
            if(dato[0].trimStart().includes("username")){
                nombre = dato[1].trimStart();
            }
    });
    if(nombre==""){
        createCookie();
    }
    else{
        alert(`Hola ${nombre}`);
    }
}

function deleteCookie(){
    document.cookie.split(";").forEach((element => {
        console.log(element);
        element += ";expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    }));
    //document.cookie = "expires=Thu, 01 Jan 1970 00:00:00 UTC";
}

window.onload = function(){
    this.getCookies();
}

var cookies = document.cookie;

//getCookies();