// Exemple d'animation du bouton
const buttons = document.querySelectorAll('.btn-main');
buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.1)';
    });
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
    });
});
