'use strict'

const images = [
    { 'id': '1', 'url':'./img/imageHome.png' },
    { 'id' : '2', 'url':'./img/casa_assombrada.jpg' },
//     {'id' : '4', 'url' : './trailers/image 7.png'},
//     {'id' : '5', 'url' : './trailers/invocacao-do-mal-warrens_2-1.jpg'},
//     {'id' : '6', 'url' : './trailers/transferir.jpeg'},
]

const containerItems = document.querySelector('#container-items');

const loadImages = (images, container) => {
    images.forEach ( image => {
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'
            </div> 
        `
    })
}

loadImages( images , containerItems );

let items = document.querySelectorAll('.item');

const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}

const next = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore(lastItem, items[0]);
    items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);