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