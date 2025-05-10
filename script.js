document.addEventListener("DOMContentLoaded", function(){
  console.log("Dahi Masajes App loaded successfully");
  
  // Si deseas generar dinámicamente la galería (de imágenes 1 a 8 en formato JPG), descomenta este código.
  /*
  const cantidadImagenes = 8;  // Número total de imágenes en la carpeta
  const galeriaContainer = document.getElementById("galeria");
  
  // Limpia el contenido existente si deseas reemplazar la galería estática
  // galeriaContainer.innerHTML = "";
  
  for (let i = 1; i <= cantidadImagenes; i++) {
      const imgElement = document.createElement("img");
      imgElement.src = `imagenes/${i}.jpg`; // Ajusta a la extensión y nombre usado en tu carpeta
      imgElement.classList.add("img-fluid", "rounded", "border", "border-danger", "shadow", "col-md-4");
      imgElement.alt = `Imagen de masaje ${i}`;
      galeriaContainer.appendChild(imgElement);
  }
  */
});


