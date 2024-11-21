let contactBtn = document.querySelector(".button-contact");

setInterval(()=>{
    console.log("Ejecutando acción cada 2 segundos");
    changeColor("#0066ff", "2px");
    setTimeout(() => {
        changeColor("#00ddaa", "3px");
    }, 1000);
}, 2000)

function changeColor (color, px){
    contactBtn.style.borderColor = color;
    contactBtn.style.color = color;
    contactBtn.style.borderWidth = px;
}