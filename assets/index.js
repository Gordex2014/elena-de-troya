function handleResponse(response) {
    if (response) {
        alert('¡Gracias por hacerme la persona más feliz del mundo! ❤️');
    } else {
        const noButton = document.querySelector('.btn-no');
        const randomX = Math.random() * (window.innerWidth - 100);
        const randomY = Math.random() * (window.innerHeight - 50);
        noButton.style.position = 'absolute';
        noButton.style.left = randomX + 'px';
        noButton.style.top = randomY + 'px';
    }
}
