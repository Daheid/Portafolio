document.addEventListener("DOMContentLoaded", function () {
  const proyectos = document.querySelectorAll(".proyecto")
  const verMasBtn = document.getElementById("verMasBtn")
  let elementosMostrados = 3

  // Mostrar los primeros 3 elementos al cargar la página
  for (let i = 0; i < elementosMostrados; i++) {
    if (proyectos[i]) {
      proyectos[i].classList.add("mostrar")
    }
  }

  // Al hacer clic en "Ver más"
  verMasBtn.addEventListener("click", function () {
    let nuevosElementos = 0

    // Mostrar 3 elementos más
    for (let i = elementosMostrados; i < elementosMostrados + 3; i++) {
      if (proyectos[i]) {
        proyectos[i].classList.add("mostrar")
        nuevosElementos++
      }
    }

    elementosMostrados += nuevosElementos

    // Si ya no hay más elementos por mostrar, ocultar el botón
    if (elementosMostrados >= proyectos.length) {
      verMasBtn.style.display = "none"
    }
  })
})
