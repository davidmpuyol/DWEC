function eliminarCookies(){
    configuracion.forEach(element => {
        document.cookie=element+";expires=Thu, 01 Jan 1970 00:00:00 UTC;"
    }); 
}
function crearCookie(inden,valor,exp){
    document.cookie=inden+"="+valor+";expires="+exp+" 00:00:00 UTC";
}
if (document.cookie=="") {
    var name= prompt("Introduce tu nombre");
    crearCookie("nombre",name,"Thu, 01 Nov 2050")
    var colorf= prompt("Introduce color de fondo");
    crearCookie("colorf",colorf,"Thu, 01 Nov 2050")
    var colorp= prompt("Introduce color del parrafo");
    crearCookie("colorfp",colorp,"Thu, 01 Nov 2050")
    var size= prompt("Introduce tamaño de texto");
    crearCookie("texts",size,"Thu, 01 Nov 2050")
    console.log(document.cookie);
}
var configuracion=document.cookie.split(";");
var nombre=configuracion[0].split("=");
var backColor=configuracion[1].split("=");
var parrafColor=configuracion[2].split("=");
var fontsSize=configuracion[3].split("=");
console.log(configuracion[1]);
document.getElementsByTagName("html")[0].style.backgroundColor=backColor[1];
document.getElementsByTagName("html")[0].style.fontSize=fontsSize[1]+"px";
var parrafos=document.getElementsByTagName("p")
for (let index = 0; index < parrafos.length; index++) {
    parrafos[index].style.backgroundColor=parrafColor[1];
}
console.log(document.cookie);
alert("Hola "+nombre[1]);