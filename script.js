document.addEventListener('DOMContentLoaded', () => {
    // Menu Hamburger
    const hamburger = document.querySelector('.header__hamburger');
    const navMenu = document.querySelector('.header__menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Fermer le menu si un lien est cliqué
    document.querySelectorAll('.header__menu a').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });

    // Gestion du menu sticky et des liens actifs
    const header = document.querySelector('.header');
    const sections = document.querySelectorAll('section[id]');

    const updateActiveClass = () => {
        let currentActive = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - header.offsetHeight; // Ajuste pour le header sticky
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
                currentActive = section.getAttribute('id');
            }
        });

        document.querySelectorAll('.header__menu a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(currentActive)) {
                link.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', () => {
        updateActiveClass();
    });

    // Appel initial pour définir la classe active au chargement
    updateActiveClass();

    // Validation de base du formulaire de contact (sans envoi réel)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Empêche l'envoi réel du formulaire

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();

            if (name === '' || email === '' || message === '') {
                alert('Veuillez remplir tous les champs obligatoires (Nom, Email, Message).');
                return;
            }

            if (!validateEmail(email)) {
                alert('Veuillez entrer une adresse email valide.');
                return;
            }

            // Ici, vous pouvez ajouter une logique pour afficher un message de succès
            // ou envoyer les données via AJAX si vous avez un backend.
            alert('Message envoyé avec succès (simulation) ! Merci de votre intérêt.');
            contactForm.reset(); // Réinitialise le formulaire
        });
    }

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
});