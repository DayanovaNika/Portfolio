const cardList = document.querySelector("#cardList");

cardList.addEventListener("click", (e) => {
    const isCard = e.target.closest("[data-card]");
    const isCross = e.target.closest("[data-cross]");

    if (isCard) {
        isCard.classList.add("open");
    }
    
    if (isCross) {
        isCard.classList.remove("open");
    }
})