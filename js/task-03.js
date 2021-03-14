const images = [{
        url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',
    },
    {
        url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
        url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',
    },
];

const gallRef = document.querySelector('#gallery');
const liItRef = document.createElement('li');
const imgRef = document.createElement('img');

gallRef.classList.add('gallery');

const createGalleryItem = images => {
    return images.map(({ url, alt }) => {
        return `<li class='gallery__item'>
    <img src='${url}' alt='${alt}' loading='lazy' width=320 height=240>
    </li>`
    }).join(' ');
}
gallRef.insertAdjacentHTML('beforeend', createGalleryItem(images));