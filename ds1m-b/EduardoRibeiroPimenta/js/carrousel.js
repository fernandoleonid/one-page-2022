const next = document.getElementById('next');
const prev = document.getElementById('prev');
const images = document.querySelector('.images-container');
const size = document.getElementById('novidades');

let current_card = 0;
let primeiro_card = 260;
let contador = 0;
next.addEventListener('click', () => {

    if(current_card < images.children.length -1 ){
        if(contador == 0){
            contador++;
            images.style.transitionDuration = "0.5s";
            images.style.transform = "translate(-"+ (primeiro_card) +"px)";
            
        }
        if(size.style.width < 770){
            contador++;
            current_card++;
            images.style.transitionDuration = "0.5s";
            images.style.transform = "translate(-"+ (520 * current_card) +"px)";
        }
        else{
            current_card++;
            contador++;
            images.style.transitionDuration = "0.5s";
            images.style.transform = "translate(-"+ (primeiro_card + 520 * current_card) +"px)";
        }

        
    }else{
        return;
    }


});

prev.addEventListener('click', () => {
    if(contador == 1 && size.style.width > 770){
        contador--;
        images.style.transitionDuration = "0.5s";
        images.style.transform = "translate(0px)";
    }
    if(current_card > 0 && size.style.width > 770){
        current_card--;
        contador--;
        images.style.transitionDuration = "0.5s";
        images.style.transform = "translate(-"+ (520 * current_card + primeiro_card) +"px)";
    }
    if(size.style.width < 770){
        contador--;
        current_card--;
        images.style.transitionDuration = "0.5s";
        images.style.transform = "translate(-"+ (520 * current_card) +"px)";

    }



});



