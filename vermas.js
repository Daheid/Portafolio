document.addEventListener("DOMContentLoaded", function () {
  const proyectos = document.querySelectorAll(".proyecto-card")
  const verMasBtn = document.getElementById("verMasBtn")
  let elementosMostrados = 3

  // Función para inicializar la visualización
  function inicializarProyectos() {
    proyectos.forEach((proyecto, index) => {
      if (index < elementosMostrados) {
        proyecto.classList.add("mostrar")
      } else {
        proyecto.classList.remove("mostrar")
      }
    })

    // Ocultar botón si no hay más proyectos por mostrar
    verMasBtn.style.display =
      elementosMostrados >= proyectos.length ? "none" : "block"
  }

  // Inicializar al cargar la página
  inicializarProyectos()

  // Al hacer clic en "Ver más"
  verMasBtn.addEventListener("click", function () {
    elementosMostrados += 3

    // Mostrar los siguientes proyectos
    inicializarProyectos()
  })
})
