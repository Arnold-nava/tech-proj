const openSearch = document.getElementById("open-search");
const exitSearch = document.getElementById("close-search");
const modalSearch = document.getElementById("search-modal");
const searchBox = document.getElementById("search-box")

openSearch.addEventListener("click", () => {
    modalSearch.classList.add("active");
});

exitSearch.addEventListener("click", () => {
    modalSearch.classList.remove("active");
});

modalSearch.addEventListener("click", e => {
    if (e.target === modalSearch) {
        modalSearch.classList.remove("active");
    }
});