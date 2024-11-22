let phone = document.getElementById("phone");
phone.addEventListener("keypress", (key) => {
    if (isNaN(key.key) || key.key === " " || key.key === "") {
        alert("Solo se permiten números");
        key.preventDefault();
    }
});

const validateForm = () => {
    deleteAlerts();
    let validate = true;
    const nameCharacters = /^[a-zA-Z\sÁáÉéÍíÓóÚú]+$/;
    const emailCharacters = /^[a-zA-Z0-9._-]+@[a-zA-Z.-]+[a-zA-Z]+$/
;

    //Validación de nombres y apellidos
    let name = document.getElementById("name");
    if (name.value === "") {
        showAlert("Este campo es requerido. Ingrese sus nombres y apellidos", name);
        validate = false;
    } else if (name.value.length < 10) {
        showAlert("Minimo 10 caracteres", name);
        validate = false;
    } else if (!nameCharacters.test(name.value)) {
        showAlert("Solo se permiten letras", name);
        validate = false;
    }

    //Validación de email
    let email = document.getElementById("email");
    if (email.value === "") {
        showAlert("Este campo es requerido. Ingrese su email", email);
        validate = false;
    } else if(!emailCharacters.test(email.value)){
        showAlert("Solo se permite letras, números y caracteres especiales como . - _ @", email);
        validate = false;
    }

    //Validación de teléfono
    if (phone.value === "") {
        showAlert("Este campo es requerido. Ingrese su teléfono", phone);
        validate = false;
    } else if (phone.value.length !== 10) {
        showAlert("Solo debe contener 10 dígitos", phone);
        validate = false;
    }

    //Validación de idioma
    let language = document.querySelector("#options-language");
    if (language.value === "info") {
        showAlert("Este campo es requerido. Seleccione el idioma", language);
        validate = false;
    }

    //Validación del motivo de la solicitud de contacto
    let reasonContact = document.querySelector('input[name="motivo-radio"]:checked');
    if (!reasonContact) {
        let divRadios = document.querySelector(".radio-buttons");
        showAlert("Este campo es requerido. Seleccione el motivo", divRadios);
        validate = false;
    }

    //Validación de mensaje
    let message = document.getElementById("message");
    if (message.value === "") {
        showAlert("Este campo es requerido. Ingrese el motivo de su solicitud", message);
        validate = false;
    } else if (message.value.length < 10) {
        showAlert("Mínimo 10 caracteres. Detalle el motivo de su solicitud", message);
        validate = false;
    }
    return validate;
};

const showAlert = (messageAlert, element) => {
    let p = document.createElement("p");
    p.textContent = messageAlert;
    p.classList.add("alert");
    element.parentNode.firstElementChild.appendChild(p);
};

const deleteAlerts = () => {
    let alerts = document.querySelectorAll(".alert");
    alerts.forEach((alertA) => {
        alertA.remove();
    });
};
