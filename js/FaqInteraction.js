// 1. Expandir/Colapsar respuestas de las preguntas frecuentes
document.querySelectorAll(".faq-item").forEach((faqItem) => {
    faqItem.addEventListener("click", () => {
        const answer = faqItem.querySelector("p"); // Encuentra el párrafo de respuesta dentro del ítem.
        answer.style.display = answer.style.display === "block" ? "none" : "block";
    });
});

// 2. Filtro dinámico de preguntas frecuentes
const searchInput = document.querySelector(".input-style");
const faqItems = document.querySelectorAll(".faq-item");

searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase(); // Obtiene el texto de búsqueda en minúsculas.
    faqItems.forEach((faqItem) => {
        const headerText = faqItem.querySelector("h4").textContent.toLowerCase(); // Encuentra el texto del encabezado.  
        faqItem.style.display = headerText.includes(query) ? "block" : "none"; // Muestra u oculta el cuadro.
    });
});



// 3. Resaltar preguntas al pasar el mouse
faqItems.forEach((faqItem) => {
    faqItem.addEventListener("mouseover", () => {
        faqItem.style.backgroundColor = "#f0f8ff"; // Cambia el color al pasar el mouse.
    });
    faqItem.addEventListener("mouseout", () => {
        faqItem.style.backgroundColor = "white"; // Restaura el color al salir.
    });
});


document.getElementById("btn-evaluacion").onclick = function () {
    window.location.href = "evaluation.html";
};


