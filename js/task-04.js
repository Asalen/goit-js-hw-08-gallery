const decrBtn = document.querySelector('button[data-action="decrement"]');
const incrBtn = document.querySelector('button[data-action="increment"]');
const counter = document.querySelector('span');

let count = 0;

const incrBtnClick = () => {
    count += 1;
    counter.innerText = count;
}

const decrBtnClick = () => {
    count -= 1;
    counter.innerText = count;
}

incrBtn.addEventListener('click', incrBtnClick);
decrBtn.addEventListener('click', decrBtnClick);