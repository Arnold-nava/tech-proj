const video = document.querySelector(`.video`);
const loader = document.querySelector(`.loader`);


video.addEventListener(`ended` ,() => {
    loader.style.animation = "smoother 1s linear";
    loader.style.opacity = "0";
});