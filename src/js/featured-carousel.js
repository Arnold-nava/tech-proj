const count = document.querySelector('.wrapper');
const card = document.querySelectorAll('.featured-card');
const next = document.querySelector('.btn-right');
const prev = document.querySelector('.btn-left');

let current = 0;

next.addEventListener('click', () => {
    current = (current + 1) % card.length;
    count.style.transform = `translateX(-${current * 100}%)`;
});

prev.addEventListener('click', () => {
    current = (current - 1 + card.length) % card.length;
    count.style.transform = `translateX(-${current * 100}%)`;
});