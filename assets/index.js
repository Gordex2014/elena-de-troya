function handleResponse(response) {
    if (response) {
        const content = document.querySelector('.content');
        content.innerHTML = '<div class="heart"></div>';
        document.querySelector('.heart').style.display = 'block';
        alert('¡Gracias por darme esta linda oportunidad! ❤️');
    } else {
        const noButton = document.querySelector('.btn-no');
        const yesButton = document.querySelector('.btn-yes');
        const buttonWidth = noButton.offsetWidth;
        const buttonHeight = noButton.offsetHeight;
        
        // Calculate safe boundaries (padding of 20px from edges)
        const maxX = window.innerWidth - buttonWidth - 40;
        const maxY = window.innerHeight - buttonHeight - 40;
        const minX = 20;
        const minY = 20;

        // Get yes button position
        const yesRect = yesButton.getBoundingClientRect();
        const safeDistance = 100; // Minimum distance between buttons

        let randomX, randomY;
        let attempts = 0;
        const maxAttempts = 50;

        do {
            randomX = Math.floor(Math.random() * (maxX - minX + 1)) + minX;
            randomY = Math.floor(Math.random() * (maxY - minY + 1)) + minY;
            
            // Calculate distance between buttons
            const distance = Math.sqrt(
                Math.pow(randomX - yesRect.left, 2) + 
                Math.pow(randomY - yesRect.top, 2)
            );

            if (distance >= safeDistance || attempts >= maxAttempts) {
                break;
            }
            attempts++;
        } while (true);

        noButton.style.position = 'fixed';
        noButton.style.left = randomX + 'px';
        noButton.style.top = randomY + 'px';
    }
}
