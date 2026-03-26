const img = document.querySelector(`.img-container`);
const index = document.querySelectorAll(`.img`);
let slide = 0;

function hero(){
    const length = index.length;

    slide = (slide + 1) % length;

    img.style.transform = `translateX(-${slide * (100 / length)}%)`;

}

setInterval(hero, 5000);