document.addEventListener('DOMContentLoaded', function() {
    const noButton = document.getElementById('no');
    const container = document.querySelector('.container');

    function moveNoButton() {
        // Obter o tamanho e posição do container
        const containerRect = container.getBoundingClientRect();
        
        // Obter o tamanho do botão "Não"
        const buttonRect = noButton.getBoundingClientRect();

        // Limites dentro do container
        const maxX = containerRect.width - buttonRect.width;
        const maxY = containerRect.height - buttonRect.height;

        // Ajustar posição para não sair do container
        const newX = Math.random() * maxX;
        const newY = Math.random() * maxY;

        noButton.style.position = 'absolute'; // Garante que o botão se mova livremente
        noButton.style.left = `${newX}px`;
        noButton.style.top = `${newY}px`;
    }

    // Mover o botão "Não" a cada 500ms
    setInterval(moveNoButton, 500);
});
