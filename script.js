document.addEventListener('DOMContentLoaded', function() {
    // Année courante pour le footer
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Gestion du défilement fluide vers les sections
    document.querySelectorAll('a.nav-link[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Optionnel: Ajouter une classe 'scrolled' à la navbar au défilement
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // Fonctionnalité pour les liens des projets (pour l'instant, juste une alerte)
    // Plus tard, ici vous générerez ou redirigerez vers les sites de démonstration
    document.querySelectorAll('.project-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Empêche la redirection immédiate

            const projectId = this.getAttribute('data-project-id');
            let message = '';
            let targetUrl = '#'; // URL par défaut, à remplacer

            switch (projectId) {
                case 'web-digital':
                    message = "Vous avez cliqué sur 'Métiers du Web & Digital'. Ici, un site de démonstration pour une agence de marketing digital ou un consultant SEO pourrait être affiché !";
                    // targetUrl = 'URL_DEMO_METIERS_WEB_DIGITAL'; // Remplacez par l'URL réelle
                    break;
                case 'ia-tech':
                    message = "Vous avez cliqué sur 'IA & Tech'. Imaginez un site pour une startup d'IA ou un blog technologique innovant ici !";
                    // targetUrl = 'URL_DEMO_IA_TECH'; // Remplacez par l'URL réelle
                    break;
                case 'coaching-formation':
                    message = "Vous avez cliqué sur 'Coaching & Formation'. Un site élégant pour un coach de vie ou une plateforme de cours en ligne serait parfait !";
                    // targetUrl = 'URL_DEMO_COACHING_FORMATION'; // Remplacez par l'URL réelle
                    break;
                case 'associations-ong':
                    message = "Vous avez cliqué sur 'Associations & ONG'. Visualisez un site impactant pour une association caritative ou une ONG engagée ici !";
                    // targetUrl = 'URL_DEMO_ASSOCIATIONS_ONG'; // Remplacez par l'URL réelle
                    break;
                default:
                    message = "Projet inconnu.";
            }

            alert(message + "\n(Cette fonctionnalité sera développée pour rediriger vers un vrai site de démonstration.)");

            // Si vous voulez une redirection directe après l'alerte ou sans alerte :
            // window.open(targetUrl, '_blank');
        });
    });


    // Validation de formulaire simple (peut être étendu)
    const contactForm = document.querySelector('#contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Empêche l'envoi du formulaire pour le moment
            alert('Formulaire de contact envoyé (fonctionnalité à implémenter côté serveur) !');
            // Ici, vous devrez ajouter le code pour envoyer le formulaire (ex: via fetch API à un service backend ou Formspree)
            contactForm.reset(); // Réinitialise le formulaire
        });
    }

});