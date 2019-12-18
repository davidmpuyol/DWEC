function estaVacio(campo){
    return campo.value == "";
}

function makeGreen(campo){
    campo.style.border="2px solid green";
}

function makeRed(campo){
    campo.style.border="2px solid red";
}

function makeBlack(campo){
    campo.style.border="2px solid black";
}

function showError(campo,campoerror){
    makeRed(campo);
    show(campoerror);
}

function showOk(campo,campoerror){
    makeGreen(campo);
    ocultar(campoerror);
}
function show(campo){
    campo.style.visibility = "visible";
}

function ocultar(campo){
    console.log("ocultando");
    campo.style.visibility = "hidden";
}

function validarNombre(){
    let nombre = document.getElementById("nombre");
    estaVacio(nombre) ? makeBlack(nombre) : makeGreen(nombre);
}
function validarApellidos(){
    let apellidos = document.getElementById("apellidos"); 
    let regex = /[0-9]/;
    estaVacio(apellidos) ? makeBlack(apellidos) : regex.test(apellidos.value) ? makeRed(apellidos) : makeGreen(apellidos);
}

function validarDNI(){
    let dni = document.getElementById("dni");
    let errordni = document.getElementById("errordni");
    let regex = /^\d{8}[a-zA-Z]$/;
    estaVacio(dni) ? makeBlack(dni) : regex.test(dni.value) ? showOk(dni,errordni) : showError(dni,errordni);
}

function validarTelefono(){
    let telefono = document.getElementById("telefono");
    let regex = /^[9|6|8]{1}([\d]{2}[-]*){3}[\d]{2}$/;
    estaVacio(telefono) ? makeBlack(telefono) : regex.test(telefono.value) ? makeGreen(telefono) : makeRed(telefono);
}

function validarEmail(){
    let email = document.getElementById("email");
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    estaVacio(email) ? makeBlack(email) : regex.test(email.value) ? makeGreen(email) : makeRed(email);
}

function validarUsuario(){
    let usuario = document.getElementById("usuario");
    estaVacio(usuario) ? makeGreen(usuario) : makeBlack(usuario);
}

function validarPassword(){
    let password = document.getElementById("password");
    /*
        Expresión regular contraseña:
            -Debe tener al menos 8 caracteres
            -Debe contener solo caracteres alfanuméricos
            -Debe contener al menos una letra mayúscula
            -Debe contener al menos una letra minúscula
            -Debe contener al menos un número
    */
    let regex = 2;
    estaVacio(password) ? makeBlack(password) : regex.test(password.value) ? makeGreen(password) : makeRed(password);
}