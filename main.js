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