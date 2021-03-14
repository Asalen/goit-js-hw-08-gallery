const inputSymb = document.querySelector('#validation-input');

const numberSymb = inputSymb.getAttribute('data-length');

const inputChange = e => {
    if (e.target.value.length === Number(numberSymb)) {
        inputSymb.classList.add('valid');
        inputSymb.classList.remove('invalid');
    } else {
        inputSymb.classList.add('invalid');
        inputSymb.classList.remove('valid');
    }
}

inputSymb.addEventListener('change', inputChange);