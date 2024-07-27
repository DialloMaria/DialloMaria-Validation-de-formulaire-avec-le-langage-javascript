document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const inputs = form.querySelectorAll('input');
    const steps = form.querySelectorAll('div[id^="step-"]');
    let currentStep = 0;

    // Ajoute un écouteur d'événement pour valider l'entrée actuelle et afficher la suivante
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            if (validateInput(input)) {
                showNextStep();
            }
        });
    });

    // Fonction pour valider chaque champ du formulaire
    function validateInput(input) {
        let errorElement = document.getElementById(`error-${input.id}`);
        let isValid = true;
        let value = input.value.trim();

        // Validation du champ Nom
        if (input.id === 'nom') {
            if (value === '') {
                isValid = false;
                errorElement.textContent = 'Veuillez saisir votre nom.';
            } else if (value.length < 3) {
                isValid = false;
                errorElement.textContent = 'Votre nom doit contenir au moins 3 caractères.';
            } else if (value.length > 15) {
                isValid = false;
                errorElement.textContent = 'Votre nom ne doit pas dépasser 15 caractères.';
            } else {
                errorElement.textContent = '';
            }
        }

        // Validation du champ Prénom
        if (input.id === 'prenom') {
            if (value === '') {
                isValid = false;
                errorElement.textContent = 'Veuillez saisir votre prénom.';
            } else if (value.length < 3) {
                isValid = false;
                errorElement.textContent = 'Votre prénom doit contenir au moins 3 caractères.';
            } else if (value.length > 15) {
                isValid = false;
                errorElement.textContent = 'Votre prénom ne doit pas dépasser 15 caractères.';
            } else {
                errorElement.textContent = '';
            }
        }

        // Validation du champ Email
        if (input.id === 'email') {
            if (value === '') {
                isValid = false;
                errorElement.textContent = 'Veuillez saisir votre adresse email.';
            } else if (value.length < 8 || value.length > 18) {
                isValid = false;
                errorElement.textContent = 'L\'adresse email doit contenir entre 8 et 18 caractères.';
            } else if (!isValidEmail(value)) {
                isValid = false;
                errorElement.textContent = 'Adresse email invalide.';
            } else {
                errorElement.textContent = '';
            }
        }

        // Validation du champ Mot de passe
        if (input.id === 'password') {
            if (value === '') {
                isValid = false;
                errorElement.textContent = 'Veuillez saisir votre mot de passe.';
            } else if (value.length < 8) {
                isValid = false;
                errorElement.textContent = 'Le mot de passe doit contenir au moins 8 caractères.';
            } else {
                errorElement.textContent = '';
            }
        }

        // Mise à jour des classes CSS pour la validation
        if (isValid) {
            input.classList.remove('invalid');
            input.classList.add('valid');
        } else {
            input.classList.remove('valid');
            input.classList.add('invalid');
        }

        return isValid;
    }

    // Fonction pour valider le format de l'email
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Fonction pour afficher l'étape suivante
    function showNextStep() {
        if (currentStep < steps.length - 1) {
            steps[currentStep].classList.add('hidden');
            steps[currentStep + 1].classList.remove('hidden');
            currentStep++;
        } else {
            document.getElementById('submit-button').classList.remove('hidden');
        }
    }
});
