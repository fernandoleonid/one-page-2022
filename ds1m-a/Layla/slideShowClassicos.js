'use strict';

const imagesClassicos = [
    { 'id' : '1', 'url': './img/ducktales.png' },
    { 'id' : '2', 'url': './img/tico-e-teco.png'},
    { 'id' : '3', 'url': './img/a-pequena-sereia.png'},
    { 'id' : '4', 'url': './img/corcunda-de-notredame.jpg'},
]




const containerItemsClassicos = document.querySelector('#container-items-classicos');

const loadImagesClassicos = ( images, container ) => {
    images.forEach ( image => {
        container.innerHTML += `
            <div class='item-classicos'>
                <img src='${image.url}'
            </div>
        `
    })
}

loadImagesClassicos( imagesClassicos, containerItemsClassicos );

let itemsClassicos = document.querySelectorAll('.item-classicos');

const previousClassicos = () => {
    containerItemsClassicos.appendChild(itemsClassicos[0]);
    itemsClassicos = document.querySelectorAll('.item-classicos');
}

const nextClassicos = () => {
    const lastItem = itemsClassicos[itemsClassicos.length - 1];
    containerItemsClassicos.insertBefore( lastItem, itemsClassicos[0] );
    itemsClassicos = document.querySelectorAll('.item-classicos');
}

document.querySelector('#previous-classicos').addEventListener('click', previousClassicos);
document.querySelector('#next-classicos').addEventListener('click', nextClassicos);