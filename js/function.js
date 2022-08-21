
function getValue (value) {
    const inputValue = document.getElementById(value);
    const getInputValue = inputValue.value;
    inputValue.value = '';
    return getInputValue;
}
function valueDisplay (value, output) {
    const getDisplay = document.getElementById(value);
    getDisplay.innerText = output;
}