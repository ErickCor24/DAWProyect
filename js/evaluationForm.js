document.getElementById("evaluation-form").addEventListener("submit", function (event) { // Escuchar el evento submit del formulario
    event.preventDefault(); // Evitar envío predeterminado

    let isValid = true;

    // Validar nombre
    const name = document.getElementById("name");
    const alertName = document.getElementById("alert-name");
    if (name.value.trim() === "") {
        alertName.textContent = "El nombre es obligatorio.";
        isValid = false;
    } else {
        alertName.textContent = "";
    }

    // Validar email
    const email = document.getElementById("email");
    const alertEmail = document.getElementById("alert-email");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
        alertEmail.textContent = "Ingresa un correo válido.";
        isValid = false;
    } else {
        alertEmail.textContent = "";
    }

    // Validar empresa
    const company = document.getElementById("company");
    const alertCompany = document.getElementById("alert-company");
    if (company.value.trim() === "") {
        alertCompany.textContent = "El nombre de la empresa es obligatorio.";
        isValid = false;
    } else {
        alertCompany.textContent = "";
    }

    // Validar calificación
    const rating = document.getElementById("rating");
    const alertRating = document.getElementById("alert-rating");
    if (rating.value === "") {
        alertRating.textContent = "Selecciona una calificación.";
        isValid = false;
    } else {
        alertRating.textContent = "";
    }

    // Validar comentarios
    const comments = document.getElementById("comments");
    const alertComments = document.getElementById("alert-comments");
    if (comments.value.trim() === "") {
        alertComments.textContent = "El campo de comentarios no puede estar vacío.";
        isValid = false;
    } else {
        alertComments.textContent = "";
    }

    // Validar recomendación
    const recommendYes = document.getElementById("recommend-yes"); 
    const recommendNo = document.getElementById("recommend-no"); 
    const alertRecommend = document.getElementById("alert-recommend"); 
    if (!recommendYes.checked && !recommendNo.checked) {  
        alertRecommend.textContent = "Por favor selecciona una opción."; 
        isValid = false;
    } else {
        alertRecommend.textContent = "";
    }

    if (isValid) {
        alert("Formulario enviado con éxito.");
    }
});
