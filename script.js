// Animation de survol pour les boutons de réservation
document.querySelectorAll('.reserve-btn').forEach(button => {
  button.addEventListener('mouseover', () => {
    button.style.backgroundColor = '#004d40'; // Couleur plus sombre au survol
  });
  button.addEventListener('mouseout', () => {
    button.style.backgroundColor = '#00796b'; // Couleur d'origine quand la souris quitte
  });
});

// Révélation des sections au défilement
const revealSections = document.querySelectorAll('section');
const revealOptions = {
  threshold: 0.1, // Apparition quand 10% de la section est visible
  rootMargin: "0px 0px -50px 0px"
};

const revealOnScroll = new IntersectionObserver(function(entries, revealOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('reveal');
      revealOnScroll.unobserve(entry.target);
    }
  });
}, revealOptions);

revealSections.forEach(section => {
  revealOnScroll.observe(section);
});

// Bouton "Retour en haut"
const backToTopButton = document.createElement('button');
backToTopButton.innerText = "↑ Haut";
backToTopButton.classList.add('back-to-top');
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) { // Afficher après 300px de défilement
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
