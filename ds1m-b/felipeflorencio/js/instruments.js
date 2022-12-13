
const buttonInstrument = document.getElementById('next-instrument')
const listInstruments = document.getElementById('list-instruments')


buttonInstrument.addEventListener('click', next);
rightButtonComposers.addEventListener('click', next);   

// function next() {
//     const cards = document.querySelectorAll('.card-instrument')
//     container.appendChild(cards[0]);
//   }
  function next(){
    const cards = document.querySelectorAll('.card-instrument');
    listInstruments.insertBefore(cards[0], cards[3]);
  }
  