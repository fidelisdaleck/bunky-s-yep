// effet reveal

const reveals = document.querySelectorAll('.reveal');
        function revealElements() {
        for (let i = 0; i < reveals.length; i++) {
            const windowHeight = window.innerHeight;
            const revealTop = reveals[i].getBoundingClientRect().top;
            const revealPoint = 100;

            if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('visible');
            }
        }
        }

        window.addEventListener('scroll', revealElements);
        revealElements();

//Gestion du formulaire whatsApp
document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();

    const nom = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const sujet = document.getElementById("sujet").value;
    const message = document.getElementById("message").value;

    const numeroWhatsApp = "237680279842";
    const texte = 'Bonjour, je vous contacte depuis votre site Bunkys.%0A%0ANom: ' + nom + '%0AEmail: ' + email + '%0ASujet: ' + sujet + '%0AMessage: ' + message + '%0A';

    const url = 'https://wa.me/237680279842?text=' + texte;
    window.open(url, "_blank");
});