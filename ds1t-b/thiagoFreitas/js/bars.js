const menu = document.querySelector(".menu__container")

const active = () => menu.classList.toggle('active')

menu.addEventListener('click', active)