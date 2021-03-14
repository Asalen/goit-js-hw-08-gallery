const inputSize = document.querySelector('#font-size-control');

const spanText = document.querySelector('#text');

const inputMove = e => {
    spanText.style.fontSize = `${e.target.value}px`;
}

inputSize.addEventListener('input', inputMove);