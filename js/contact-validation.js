let phone = document.getElementById("phone");
phone.addEventListener("keypress", (key) => {
    if (isNaN(key.key) || key.key === " " || key.key === "") {
        alert("Solo números");
        key.preventDefault(); 
    }
});

const validateForm = () => {
    let validate = true;
    const characters = /^[a-zA-Z\s]+$/;
    
    //Validación de nombre
    let name = document.getElementById("name");
    if(name.value === ""){
        alert("Ingrese sus nombres y apellidos");
        validate = false;
    }else if(name.value.length < 10){
        alert("Minimo 10 caracteres. Ingrese sus nombres y apellidos completos");
        validate = false;
    }else if(!characters.test(name.value)){
        alert("Nombres y apellido solo debe contener letras");
        validate = false;
    }

    //Validación de teléfono
    if(phone.value.length !== 10){
        alert("Teléfono solo debe contener 10 dígitos");
        validate = false;
    }

    //Validación de idioma
    let language = document.querySelector("#options-language");
    if(language.value === ""){
        alert("Este campo es requerido. Seleccione el idioma");
        validate = false;
    }

    //Validación del motivo de la solicitud de contacto
    let reasonContact = document.querySelector('input[name = "motivo-radio"]:checked');
    if(!reasonContact){
        alert("Este campo es requerido. Seleccione el motivo de su solicitud");
        validate = false;
    }

    //Validación de mensaje
    let message = document.getElementById("message");
    if(message.value === ""){
        alert("Este campo es requerido. Ingrese el motivo de su solicitud");
        validate = false;
    }else if(message.value.length < 10){
        alert("Mínimo 10 caracteres. Detalle el motivo de su solicitud");
        validate = false;
    }

    return validate;
}