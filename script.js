document.addEventListener('DOMContentLoaded', () => {
    const themeBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;

    // Gestion du Mode Sombre
    themeBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        // Change l'icône selon le mode
        if (body.classList.contains('dark-mode')) {
            themeIcon.textContent = '☀️'; // Soleil pour revenir au clair
        } else {
            themeIcon.textContent = '🌙'; // Lune pour passer au sombre
        }
    });

    // --- Garder tes animations existantes ---
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(20px)";
        section.style.transition = "all 0.8s ease-out";
        observer.observe(section);
    });
});
// --- Code pour la Splash Screen (Garder tes animations existantes) ---
// Ajoute ceci ici :
    const splashScreen = document.getElementById('splash-screen');
    window.addEventListener('load', function() {
        setTimeout(function() {
            splashScreen.classList.add('hidden');
        }, 3000); 
    });

// --- Code pour l'effet de photo interactive (TILT) ---
// Ajoute ceci après :
    const photo = document.querySelector('header img'); 

    if (photo) {
        document.addEventListener('mousemove', function(e) {
            const speed = 15; // Plus ce chiffre est petit, plus ça tourne fort
            const x = (window.innerWidth / 2 - e.pageX) / speed;
            const y = (window.innerHeight / 2 - e.pageY) / speed;

            photo.style.transform = `perspective(1000px) rotateY(${-x}deg) rotateX(${y}deg) scale(1.1)`;
        });

        document.addEventListener('mouseleave', function() {
            photo.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)';
        });
    }

// --- Fin de l'ajout ---