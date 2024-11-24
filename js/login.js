// Función para mostrar el formulario de Login
document.getElementById('login-btn').onclick = function () {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('register-form').style.display = 'none';
};

// Función para mostrar el formulario de Registro
    document.getElementById('register-btn').onclick = function () {
    document.getElementById('register-form').style.display = 'block';
    document.getElementById('login-form').style.display = 'none';
};

// Función para validar el formulario de Login
    function validateLogin() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Validación de correo electrónico
    if (!email.includes("@")) {
        alert("Por favor, ingresa un correo electrónico válido.");
        return false;
    }

    if (email === "" || password === "") {
        alert("Por favor, ingresa tu correo y contraseña.");
        return false;
    }

    alert("Login exitoso");
    return true;
}

// Función para validar el formulario de Registro
function validateRegister() {
    const name = document.getElementById('register-name').value;
    const lastname = document.getElementById('register-lastname').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const termsAccepted = document.getElementById('terms-conditions').checked;
    const country = document.getElementById('country').value;
    const gender = document.getElementById('rapi').value;
    const birthDate = document.getElementById('register-age').value;

    // Validación de Nombre y Apellido (solo letras y no vacíos)
    const nameRegex = /^[A-Za-z]+$/;
    if (!nameRegex.test(name) || name === "") {
        alert("El nombre debe contener solo letras y no puede estar vacío.");
        return false;
    }

    if (!nameRegex.test(lastname) || lastname === "") {
        alert("El apellido debe contener solo letras y no puede estar vacío.");
        return false;
    }

    // Validación de correo electrónico
    if (!email.includes("@") || email === "") {
        alert("Por favor, ingresa un correo electrónico válido.");
        return false;
    }

    // Validación de Contraseña
    if (password === "") {
        alert("Por favor, ingresa una contraseña.");
        return false;
    }

    // Validación de Términos y Condiciones
    if (!termsAccepted) {
        alert("Por favor, acepta los Términos y Condiciones.");
        return false;
    }

    // Validación de género
    if (gender === "") {
        alert("Por favor, selecciona tu género.");
        return false;
    }

    // Validación de fecha de nacimiento
    if (birthDate === "") {
        alert("Por favor, ingresa tu fecha de nacimiento.");
        return false;
    }

    alert("Registro exitoso");
    return true;
}