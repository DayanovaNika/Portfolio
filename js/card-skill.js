const cardList = document.querySelector("#cardList");

cardList.addEventListener("click", (e) => {
    const isCard = e.target.closest("[data-card]");

    if (isCard) {
        isCard.classList.toggle("open");
    }
})