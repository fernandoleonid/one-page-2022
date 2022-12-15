'use strict';

const images = [
    { 'id': '1', 'url':'./img/Cloud.png' },
    { 'id': '2', 'url':'./img/Barret.png' },
    { 'id': '3', 'url':'./img/Sephiroth.png' },
    { 'id': '4', 'url':'./img/Aerith.png' },
    { 'id': '5', 'url':'./img/Tifa.png' },
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

