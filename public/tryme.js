const btnTryMe = document.getElementById("btnTryMe");

btnTryMe.addEventListener("click", tryMe);

function tryMe(){ 
    alert("Hola! Has presionado el botón Try me");

    const respuesta = prompt("¿Cómo estás?");
    console.log("El usuario respondió: " + respuesta);

    if(respuesta.toLowerCase() === "bien"){
        alert("Que bueno que estés bien");
    } else {
        alert("Animo, todo mejorará pronto");
    }
}