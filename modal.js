// Abrir y cerrar el modal
const modal = document.getElementById("modal")
const openModalBtn = document.getElementById("openModalBtn")
const closeModalBtn = document.getElementById("closeModalBtn")

openModalBtn.onclick = function () {
  modal.style.display = "block"
}

closeModalBtn.onclick = function () {
  modal.style.display = "none"
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none"
  }
}

// Abrir y cerrar el modal
const modal2 = document.getElementById("modal2")
const openModalBtn2 = document.getElementById("openModalBtn2")
const closeModalBtn2 = document.getElementById("closeModalBtn2")

openModalBtn2.onclick = function () {
  modal2.style.display = "block"
}

closeModalBtn2.onclick = function () {
  modal2.style.display = "none"
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal2.style.display = "none"
  }
}
