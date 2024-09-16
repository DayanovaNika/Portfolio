const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu");

burger.addEventListener("click", function() {
    menu.classList.toggle("open");
    burger.classList.toggle("active"); 
})

menu.addEventListener("click", function(event) {
    const isAnchorLink = event.target.closest("[data-anchor-link]");
    console.log(isAnchorLink);
    if (isAnchorLink) {
        menu.classList.remove("open");
        burger.classList.remove("active");
    }
})

