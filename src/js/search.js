const openSearch = document.getElementById("open-search");
const closeSearch = document.getElementById("close-search");
const searchModal = document.getElementById("search-modal");

openSearch.addEventListener("click", () => {
    searchModal.classList.add("active");
});

closeSearch.addEventListener("click", () => {
    searchModal.classList.remove("active");
});