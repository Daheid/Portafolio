document.addEventListener("DOMContentLoaded", function () {
  // Seleccionar todos los proyectos
  const proyectos = document.querySelectorAll(".proyecto")
  const modales = document.querySelectorAll(".modal")

  // Para cada proyecto, agregar un evento de clic para abrir su respectivo modal
  proyectos.forEach((proyecto) => {
    proyecto.addEventListener("click", function () {
      const idProyecto = proyecto.getAttribute("id")
      const modalId = `modal-${idProyecto}`
      const modal = document.getElementById(modalId)

      // Mostrar el modal respectivo
      if (modal) {
        modal.style.display = "block"
      }
    })
  })

  // Agregar eventos para cerrar los modales
  modales.forEach((modal) => {
    const closeBtn = modal.querySelector(".close")
    closeBtn.addEventListener("click", function () {
      modal.style.display = "none"
    })
  })

  // Cerrar el modal si se hace clic fuera del contenido del modal
  window.addEventListener("click", function (e) {
    modales.forEach((modal) => {
      if (e.target === modal) {
        modal.style.display = "none"
      }
    })
  })
})
