
const leftButtonComposers = document.getElementById('left-button-composers')
const rightButtonComposers = document.getElementById('right-button-composers')

const container = document.getElementById('list-composers')
let contador = 0

leftButtonComposers.addEventListener('click', previous)
rightButtonComposers.addEventListener('click', next)

function previous() {
    const cards = document.querySelectorAll('.card')
    container.appendChild(cards[0]);
  }
  function next(){
    const cards = document.querySelectorAll('.card')
    container.insertBefore(cards[0], cards[3]);
  }
  
  

  // if(contador < 3){
  //   container.appendChild(cards[contador]);
  //   contador++;
  // } else {
  //   contador = 0;
  //   container.appendChild(cards[contador])
  //   contador++;
  // }
  
  console.log(contador)
