const menu = document.querySelector(".container-burguer");

const active = () => menu.classList.toggle("active");

menu.addEventListener("click", active);
