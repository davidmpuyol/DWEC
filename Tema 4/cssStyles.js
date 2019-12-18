
estiloNormal = false;
function cambiarEstilo(event){
    css = document.getElementById("estiloCss");
    if(!estiloNormal && event.target.id == "temaNormal"){
        css.disabled = false;
        estiloNormal = !estiloNormal;
    } else if(estiloNormal && event.target.id == "temaMinimalista"){
        css.disabled = true;
        estiloNormal = !estiloNormal;
    }
}
//principal = document.getElementById("principal");
/*
function temaNormal(){
    principal.style.width = "80%";
    principal.style.margin = "0 auto";
    principal.style.backgroundColor = "lightyellow";
    document.getElementsByTagName("body")[0].style.backgroundColor = "blue";
    console.log(document.getElementById("temas"));
    document.getElementById("temas").style.backgroundColor = "lightblue";
    document.getElementById("temas").style.color = "blue";
    document.getElementById("temas").style.fontSize = "20px";
    document.getElementById("temas").style.fontWeight = "bold";
    document.getElementById("temas").style.textDecoration = "none";
    document.getElementById("temas").style.borderBottom = "1px solid black";
    document.getElementById("temas").style.borderRight = "1px solid black";
    document.getElementById("marco").style.backgroundColor = "yellow";
    document.getElementById("marco").style.border = "2px solid black";
    document.getElementById("invisible").style.visibility = "visible";
}
*/
/*
function temaNormal(){
    if(!estiloNormal){
        var cabecera = document.getElementsByTagName('head')[0];
        var enlace = document.createElement('link');
        enlace.type = 'text/css';
        enlace.href = "style.css";
        enlace.id = "estilo"
        enlace.rel = 'stylesheet';
        cabecera.appendChild(enlace);
        console.log(document.styleSheets);
        estiloNormal = true;
        estiloMinimalista = false;
    }
}
function temaMinimalista(){

}
*/
/*
function cambiarEstilo(event){
    let origen = event.target;
    console.log(origen);
    if(!estiloNormal && origen.id=="temaNormal"){
        var cabecera = document.getElementsByTagName('head')[0];
        var enlace = document.createElement('link');
        enlace.type = 'text/css';
        enlace.href = "style.css";
        enlace.id = "estilo"
        enlace.rel = 'stylesheet';
        cabecera.appendChild(enlace);
        document.getElementById("invisible").style.visibility = "visible";
        estiloNormal = true;
        estiloMinimalista = false;
    }
    else if(!estiloMinimalista && origen.id=="temaMinimalista"){
        for(let i = 0; i< document.styleSheets.length; i++){
            document.styleSheets[i].disabled = true;
        }
        document.getElementById("invisible").style.visibility = "hidden";
        estiloNormal = false;
        estiloMinimalista = true;
    }
}
*/

    
