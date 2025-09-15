document.addEventListener("DOMContentLoaded", function () {
  const tabButtons = document.querySelectorAll(".tab-btn")
  const projectCards = document.querySelectorAll(".proyecto-card")

  // Función para filtrar proyectos
  function filterProjects(category) {
    projectCards.forEach((card) => {
      if (
        category === "all" ||
        card.getAttribute("data-category") === category
      ) {
        card.style.display = "block"
      } else {
        card.style.display = "none"
      }
    })
  }

  // Event listeners para los botones de pestañas
  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remover clase active de todos los botones
      tabButtons.forEach((btn) => btn.classList.remove("active"))

      // Agregar clase active al botón clickeado
      this.classList.add("active")

      // Filtrar proyectos según la categoría
      const category = this.getAttribute("data-category")
      filterProjects(category)
    })
  })

  // Mostrar todos los proyectos al cargar la página
  filterProjects("all")
})
