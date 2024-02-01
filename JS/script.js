
const toggleButton = document.getElementById('toggleButton');

toggleButton.addEventListener('click', () => {
    const buttonText = toggleButton.innerHTML;
    console.log("buttonText: "+buttonText);
    toggleButton.innerHTML = buttonText == 'Más' ? 'Menos' : 'Más';
});
