// Animation d'entrée de page
window.addEventListener("load", () => {
    const hero = document.querySelector('.hero');
    hero.style.opacity = 1;
    hero.style.transition = 'opacity 1s ease';
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
