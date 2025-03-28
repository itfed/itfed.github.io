document.addEventListener('DOMContentLoaded', function() {
    if (window.innerWidth > 768) {
        const bubblesContainer = document.querySelector('.bg-bubbles');
        for (let i = 0; i < 10; i++) {
            const bubble = document.createElement('li');
            bubble.style.left = Math.random() * 100 + '%';
            bubble.style.width = (Math.random() * 50 + 20) + 'px';
            bubble.style.height = bubble.style.width;
            bubble.style.animationDelay = (Math.random() * 5) + 's';
            bubble.style.animationDuration = (Math.random() * 10 + 10) + 's';
            bubblesContainer.appendChild(bubble);
        }
    }
});