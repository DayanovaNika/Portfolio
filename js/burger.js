const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu");

burger.addEventListener("click", function() {
    menu.classList.toggle("open");
})

menu.addEventListener("click", function(event) {
    const isAnchorLink = event.target.closest("[data-anchor-link]");

    if (isAnchorLink) {
        menu.classList.remove("open");
    }
})
