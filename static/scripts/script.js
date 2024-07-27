// Obtener elementos del DOM
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const modal = document.getElementById('myModal');

// Mostrar el modal
openModalBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

// Ocultar el modal cuando se haga clic en el botón de cerrar
closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Ocultar el modal si se hace clic fuera del contenido del modal
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
