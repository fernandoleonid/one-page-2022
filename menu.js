var menu = document.querySelector(".menuBar");
var btn = document.querySelector(".btn-menu");
var btnVoltar = document.querySelector(".btnVoltar");
var paredeFechar = document.querySelector(".paredeFechar");
var linkMenu = document.querySelector(".linkMenu");
btn.addEventListener('click', () => {
    menu.classList.toggle('active');
    paredeFechar.classList.toggle('active');


})
btnVoltar.addEventListener('click', () => {
    menu.classList.toggle('active');
    paredeFechar.classList.toggle('active');


})
paredeFechar.addEventListener('click', () => {
    menu.classList.toggle('active');
    paredeFechar.classList.toggle('active');


})
linkMenu.addEventListener('click', () => {
    menu.classList.toggle('active');
    paredeFechar.classList.toggle('active');


})
