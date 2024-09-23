document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault() // Evitar el comportamiento por defecto del formulario

  // Capturar los valores del formulario
  const nombre = document.querySelector('input[name="nombre"]').value
  const telefono = document.querySelector('input[name="telefono"]').value
  const email = document.querySelector('input[name="email"]').value
  const tema = document.querySelector('input[name="tema"]').value
  const mensaje = document.querySelector('textarea[name="mensaje"]').value

  // Desactivar el botón de enviar
  const submitButton = e.target.querySelector('button[type="submit"]')
  submitButton.disabled = true
  submitButton.textContent = "Enviando..."

  // Enviar los datos usando fetch
  fetch("https://formsubmit.co/ajax/soynelsond@gmail.com", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      nombre: nombre,
      telefono: telefono,
      email: email,
      tema: tema,
      mensaje: mensaje,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Mensaje enviado con éxito", data)
      // Mostrar SweetAlert de éxito
      Swal.fire({
        icon: "success",
        title: "Mensaje enviado",
        text: "Tu mensaje ha sido enviado con éxito",
        confirmButtonText: "Aceptar",
      }).then(() => {
        // Recargar la página después de cerrar la alerta
        location.reload()
      })
    })
    .catch((error) => {
      console.error("Error al enviar el mensaje", error)
      // Mostrar SweetAlert de error
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Hubo un problema al enviar tu mensaje. Inténtalo de nuevo más tarde.",
        confirmButtonText: "Aceptar",
      }).then(() => {
        // Recargar la página después de cerrar la alerta
        location.reload()
      })
    })
})
