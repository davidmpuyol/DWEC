function addElement(){
    var lista = document.getElementById("lista");
    console.log(lista);
    var nEnlaces =lista.children.length;
    lista.innerHTML += "<li>Elemento "+(nEnlaces+1)+"</li>";
    /*
    var nuevoElemento = document.createElement("li");
    var texto = document.createTextNode("Elemento "+(nEnlaces+1));
    nuevoElemento.appendChild(texto);
    lista.appendChild(nuevoElemento);
    console.log(nEnlaces);
    */
}