  // Obtener el modal
var modal = document.getElementById("myModal");

  // Obtener el elemento <span> que cierra el modal
var span = document.getElementsByClassName("close")[0];

  // Obtener el elemento <p> dentro del modal donde se mostrará la información
var modalText = document.getElementById("modalText");

  // Obtener todas las imágenes con la clase "cabeza", "torso", "piernas", "pies"
var images = document.querySelectorAll('.cabeza img, .torso img, .piernas img, .pies img');

  // Añadir un evento de clic a cada imagen
images.forEach(function(image) {
    image.onclick = function() {
        modal.style.display = "block";
        modalText.innerText = image.getAttribute("data-info");
    }
});

  // Cuando el usuario hace clic en <span> (x), cerrar el modal
span.onclick = function() {
    modal.style.display = "none";
}

  // Cuando el usuario hace clic en cualquier lugar fuera del modal, cerrarlo
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}