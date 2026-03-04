const btnLogin = document.getElementById("btnLogin");
const username = document.getElementById("username");
const password = document.getElementById("password");

btnLogin.addEventListener("click", validarLogin);

// Función para validar el login - con usuario "admin" y contraseña "1234"
function validarLogin(){
    if(username.value === "admin" && password.value === "1234"){
        console.log(username.value);
        window.location.href = "menu.html";
        alert("Login exitoso");
    } else {
        alert("Login fallido");
    }
}

// Agregar evento para que al presionar Enter también se valide el login
btnLogin.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        validarLogin();
    }
})