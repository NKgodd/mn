const carousel = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');

let currentIndex = 0;
const totalImages = images.length;
const intervalTime = 3000; // Tempo de troca de imagem (em milissegundos)

function startCarousel() {
    setInterval(() => {
        currentIndex = (currentIndex + 1) % totalImages;
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }, intervalTime);
}

document.addEventListener('DOMContentLoaded', startCarousel);
