const next = document.getElementById('next');
const prev = document.getElementById('prev');
const images = document.querySelector('.images-container');

let current_card = 0;

next.addEventListener('click', () => {
    if(current_card >1){
        current_card++;
        images.style.transitionDuration = "0.5s";
        images.style.transform = "translate(-"+ current_card * 500 +"px)";
    }else{
        current_card++;
        images.style.transitionDuration = "0.5s";
        images.style.transform = "translate(-"+ current_card * 500 +"px)";
    }


});


