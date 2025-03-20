document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector('.carousel');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const items = document.querySelectorAll('.carousel-item');
    let index = 0;

    // Função para mover o carrossel
    function updateCarouselPosition() {
        const itemWidth = items[0].offsetWidth;
        carousel.style.transform = `translateX(-${index * itemWidth}px)`; // Mover os itens
    }

    // Função para mover para o item anterior
    prevBtn.addEventListener('click', function() {
        if (index > 0) {
            index--;
        } else {
            index = items.length - 1; // Vai para o último item
        }
        updateCarouselPosition();
    });

    // Função para mover para o próximo item
    nextBtn.addEventListener('click', function() {
        if (index < items.length - 1) {
            index++;
        } else {
            index = 0; // Vai para o primeiro item
        }
        updateCarouselPosition();
    });

    // Inicializa a posição do carrossel
    updateCarouselPosition();
});
