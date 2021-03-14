let inputText = document.querySelector('#name-input');
inputText.addEventListener('input', inputChange);

let outputText = document.querySelector('#name-output');

function inputChange(event) {
    inputText = event.currentTarget.value;
    outputText.innerText = inputText ? inputText : "незнакомец";
}