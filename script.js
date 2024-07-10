function validateForm() {
    // Réinitialise les messages d'erreur
    document.getElementById('error-nom').textContent = '';
    document.getElementById('error-prenom').textContent = '';
    document.getElementById('error-email').textContent = '';
    document.getElementById('error-password').textContent = '';

    let nom = document.getElementById('nom').value.trim();
    let prenom = document.getElementById('prenom').value.trim();
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value.trim();

    let isValid = true;

    // Validation du champ Nom
    if (nom === '') {
        isValid = false;
        document.getElementById('error-nom').textContent = 'Veuillez saisir votre nom.';
    } else if (nom.length < 3) {
        isValid = false;
        document.getElementById('error-nom').textContent = 'Votre nom doit contenir au moins 3 caractères.';
    } else if (nom.length > 15) {
        isValid = false;
        document.getElementById('error-nom').textContent = 'Votre nom ne doit pas dépasser 15 caractères.';
    }

    // Validation du champ Prénom
    if (prenom === '') {
        isValid = false;
        document.getElementById('error-prenom').textContent = 'Veuillez saisir votre prénom.';
    } else if (prenom.length < 3) {
        isValid = false;
        document.getElementById('error-prenom').textContent = 'Votre prénom doit contenir au moins 3 caractères.';
    } else if (prenom.length > 15) {
        isValid = false;
        document.getElementById('error-prenom').textContent = 'Votre prénom ne doit pas dépasser 15 caractères.';
    }

    // Validation du champ Email
    if (email === '') {
        isValid = false;
        document.getElementById('error-email').textContent = 'Veuillez saisir votre adresse email.';
    } else if (email.length < 8 || email.length > 18) {
        isValid = false;
        document.getElementById('error-email').textContent = 'L\'adresse email doit contenir entre 8 et 18 caractères.';
    } else if (!isValidEmail(email)) {
        isValid = false;
        document.getElementById('error-email').textContent = 'Adresse email invalide.';
    }

    // Validation du champ Mot de passe
    if (password === '') {
        isValid = false;
        document.getElementById('error-password').textContent = 'Veuillez saisir votre mot de passe.';
    } else if (password.length < 8) {
        isValid = false;
        document.getElementById('error-password').textContent = 'Le mot de passe doit contenir au moins 8 caractères.';
    }

    return isValid;
}

function isValidEmail(email) {
    // Expression régulière pour valider l'email (exemple basique)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
