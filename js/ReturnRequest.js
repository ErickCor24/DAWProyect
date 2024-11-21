const frmReturnRequest = document.return_form;

frmReturnRequest.btn_form.addEventListener("click", (e) => {
  const name = frmReturnRequest.name.value.trim();
  const lastname = frmReturnRequest.lastname.value.trim();
  const email = frmReturnRequest.email.value.trim();
  const option = frmReturnRequest.motive_return.value.trim();
  const serial = frmReturnRequest.serial.value.trim();
  const comment = document.getElementById("comment-ta").value.trim();
  const check = frmReturnRequest.check.checked;
  if (
    validateBlanckInput(name) &&
    validateBlanckInput(lastname) &&
    validateBlanckInput(email) &&
    validateBlanckInput(option) &&
    validateBlanckInput(serial) &&
    validateBlanckInput(comment)
  ) {
    if (option !== "default") {
      if (!check) {
        e.preventDefault();
        document.getElementById("error-message").innerHTML =
          "Acepte los terminos y condiciones!";
      } else {
        if (!validateOnlyLetters(name) || !validateOnlyLetters(lastname)) {
          e.preventDefault();
          document.getElementById("error-message").innerHTML =
            "Ingrese datos validos!";
        } else {
          if (!validateOnlyEmail(email)) {
            e.preventDefault();
            document.getElementById("error-message").innerHTML =
              "Ingrese un correo valido!";
          }
        }
      }
    } else {
      e.preventDefault();
      document.getElementById("error-message").innerHTML =
        "Debe elegir el tipo de problema!";
    }
  } else {
    e.preventDefault();
    console.log("no pasa");
  }
});

function validateOnlyLetters(flag) {
  const letterRegex = /^[a-zA-Z]+$/; //only letters
  if (letterRegex.test(flag)) {
    return true;
  } else return false;
}

function validateOnlyEmail(flag) {
  const numberRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //only letters
  if (numberRegex.test(flag)) {
    return true;
  } else return false;
}

function validateBlanckInput(paragragh) {
  if (paragragh !== "") {
    document.getElementById("error-message").innerHTML = "";
    return true;
  } else {
    document.getElementById("error-message").innerHTML =
      "Error, no puede dejar campos vacios!";
    return false;
  }
}
