'use strict';

const images = [
    { 'id' : '1', 'url': './img/circulo-buzz.png' },
    { 'id' : '2', 'url': './img/circulo-moana.png'},
    { 'id' : '3', 'url': './img/circulo-genio.png'},
    { 'id' : '4', 'url': './img/circulo-mike.png'},
    { 'id' : '5', 'url': './img/circulo-remi.png'},
    { 'id' : '6', 'url': './img/circulo-tiana.png'},
    { 'id' : '7', 'url': './img/circulo-stitch.png'},
]




const containerItems = document.querySelector('#container-items');

const loadImages = ( images, container ) => {
    images.forEach ( image => {
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'
            </div>
        `
    })
}

loadImages( images, containerItems );

let items = document.querySelectorAll('.item');

const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}

const next = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore( lastItem, items[0] );
    items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);
