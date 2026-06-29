


function mostrarTexto() {
    texto_h2 = document.getElementById("resultado");
    if (texto_h2.innerHTML == "Texto aparece aqui") {
        texto_h2.innerHTML = "Hello World!";
        texto_h2.style.color = "lightgray";
        texto_h2.style.backgroundColor = "red";
        
    } else if (texto_h2.innerHTML == "Hello World!") {
        texto_h2.innerHTML = "Texto aparece aqui";
        texto_h2.style.color = "red";
        texto_h2.style.backgroundColor = "lightgray";
    }

}

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./service-worker.js")
        .then(() => {
            console.log("Service Worker registrado com sucesso!");
        })
        .catch((erro) => {
            console.error("Erro ao registrar o Service Worker:", erro);
        });
}