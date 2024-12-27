// script.js

// Abrir o cerrar el menú al hacer clic en el ícono de hamburguesa
document.getElementById('menu-toggle').addEventListener('click', function(event) {
  event.stopPropagation(); // Evitar que el clic en el ícono de hamburguesa cierre el menú inmediatamente
  const navMenu = document.querySelector('.nav-menu');
  navMenu.classList.toggle('active');
});

// Cerrar el menú si se hace clic fuera de él
document.addEventListener('click', function(event) {
  const navMenu = document.querySelector('.nav-menu');
  const menuToggle = document.getElementById('menu-toggle');

  // Verificar si el clic fue fuera del menú y del ícono de hamburguesa
  if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
      navMenu.classList.remove('active');
  }
});




let currentIndex = 0; // Índice de la imagen actual
const items = document.querySelectorAll('.banner-item'); // Todos los elementos del banner
const totalItems = items.length; // Total de imágenes en el banner

// Función para mover el slider
function moveSlider() {
    // Desplaza el slider al siguiente item
    const slider = document.querySelector('.banner-slider');
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Función para mover al siguiente item
function nextSlide() {
    currentIndex++;
    if (currentIndex >= totalItems) {
        currentIndex = 0; // Volver al principio cuando llega al final
    }
    moveSlider();
}

// Función para mover al item anterior
function prevSlide() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = totalItems - 1; // Volver al final cuando llega al principio
    }
    moveSlider();
}

// Asignar eventos a las flechas
document.getElementById('nextBtn').addEventListener('click', nextSlide);
document.getElementById('prevBtn').addEventListener('click', prevSlide);

// Configurar el carrusel para cambiar de imagen automáticamente cada 3 segundos
setInterval(nextSlide, 3000); // Cambiar la imagen cada 3 segundos




