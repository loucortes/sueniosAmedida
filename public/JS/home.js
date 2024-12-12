//Botón click para el más y menos de la historia del home

const toggleButton = document.getElementById('toggleButton');

toggleButton.addEventListener('click', () => {
    console.log("click");
    const buttonText = toggleButton.innerHTML;
    console.log("buttonText: "+buttonText);
    toggleButton.innerHTML = buttonText == 'Más' ? 'Menos' : 'Más';
});



