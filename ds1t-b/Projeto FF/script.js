
'use strict';

const images = [
    { 'id': '1', 'url':'./img/Cloud-slide.png' },
    { 'id': '2', 'url':'./img/Barret-slide.png' },
    { 'id': '3', 'url':'./img/Sephiroth-slide.png' },
    { 'id': '4', 'url':'./img/Aerith-slide.png' },
    { 'id': '5', 'url':'./img/Tifa-slide.png' },
]

const containerItems = document.querySelector('#icones');

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

