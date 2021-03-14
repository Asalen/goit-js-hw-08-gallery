const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const ulRef = document.querySelector('#ingredients');


const createLiIt = ingredients => {
    return ingredients.map(item => {
        const liIt = document.createElement('li');
        liIt.textContent = item;
        return liIt;
    })

}

const ingredientsList = createLiIt(ingredients);
ulRef.append(...ingredientsList);

// console.log(ingredientsList);