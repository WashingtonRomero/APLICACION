document.addEventListener("DOMContentLoaded", function(){
  console.log("Dahi Masajes App loaded successfully");
  
  let deferredPrompt;
  const installButton = document.getElementById("install-button");

  // Captura el evento beforeinstallprompt
  window.addEventListener('beforeinstallprompt', (e) => {
    // Previene el prompt automático y guarda el evento
    e.preventDefault();
    deferredPrompt = e;
    // Muestra el botón de instalación
    installButton.style.display = "block";
  });

  // Cuando el usuario clickea en el botón de instalar
  installButton.addEventListener("click", async () => {
    // Oculta el botón para no solicitar varias veces
    installButton.style.display = "none";
    // Muestra el prompt de instalación
    deferredPrompt.prompt();
    // Espera la respuesta del usuario
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`El usuario ${outcome === "accepted" ? "aceptó" : "rechazó"} la instalación.`);
    deferredPrompt = null;
  });
  
  // (Opcional) Código para generar dinámicamente la galería
  /*
  const cantidadImagenes = 8;  
  const galeriaContainer = document.getElementById("galeria");
  for (let i = 1; i <= cantidadImagenes; i++) {
      const imgElement = document.createElement("img");
      imgElement.src = `imagenes/${i}.jpg`; 
      imgElement.classList.add("img-fluid", "rounded", "border", "border-danger", "shadow", "col-md-4");
      imgElement.alt = `Imagen de masaje ${i}`;
      galeriaContainer.appendChild(imgElement);
  }
  */
});
