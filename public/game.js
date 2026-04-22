const params = new URLSearchParams(window.location.search);
const idUser = params.get("userId");

console.log("User en game:", idUser);

if (!idUser) {
    console.error("No hay userId en la URL");
}

// Enviar a Unity
const iframe = document.querySelector("iframe");

iframe.onload = () => {
    const idUser = new URLSearchParams(window.location.search).get("userId");

    console.log("Mandando a Unity:", idUser);

    iframe.contentWindow.setUserId(idUser);
};