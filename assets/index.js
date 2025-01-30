function handleResponse(response) {
    if (response) {
        alert('¡Gracias por hacerme la persona más feliz del mundo! ❤️');
    } else {
        const noButton = document.querySelector('.btn-no');
        const buttonWidth = noButton.offsetWidth;
        const buttonHeight = noButton.offsetHeight;
        
        // Calculate safe boundaries (padding of 20px from edges)
        const maxX = window.innerWidth - buttonWidth - 40;
        const maxY = window.innerHeight - buttonHeight - 40;
        const minX = 20;
        const minY = 20;

        // Generate random position within safe boundaries
        const randomX = Math.floor(Math.random() * (maxX - minX + 1)) + minX;
        const randomY = Math.floor(Math.random() * (maxY - minY + 1)) + minY;

        noButton.style.position = 'fixed';
        noButton.style.left = randomX + 'px';
        noButton.style.top = randomY + 'px';
    }
}
