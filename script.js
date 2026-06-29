

let deferredPrompt = null;
const installButton = document.getElementById("btn_install");

function mostrarTexto() {
    const texto_h2 = document.getElementById("resultado");
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

window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredPrompt = event;

    if (installButton) {
        installButton.style.display = "block";
    }
});

if (installButton) {
    installButton.addEventListener("click", async () => {
        if (!deferredPrompt) {
            return;
        }

        installButton.textContent = "Instalando...";
        installButton.disabled = true;

        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        console.log(`Resultado da instalação: ${outcome}`);
        deferredPrompt = null;
        installButton.style.display = "none";
    });
}

window.addEventListener("appinstalled", () => {
    if (installButton) {
        installButton.style.display = "none";
    }
});

if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("./service-worker.js")
            .then(() => {
                console.log("Service Worker registrado com sucesso!");
            })
            .catch((erro) => {
                console.error("Erro ao registrar o Service Worker:", erro);
            });
    });
}