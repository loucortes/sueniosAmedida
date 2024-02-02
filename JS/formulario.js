//Botón para habilitar o deshabilitar el botón de pago, habiendo hecho click al checkbox de políticas

const btn = document.getElementById("btn-pago");
btn.disabled = true;
const check = document.getElementById("inlineCheckbox1");

check.addEventListener("change", ()=>{
    if (check.checked) {
        btn.disabled = false; 
    } else {
        btn.disabled = true;
    }
});

