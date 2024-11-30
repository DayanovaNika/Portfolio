// декомпозировать initialSlider
const initialSlider = (sliderOfSelector) => {
    const sliderElement = document.querySelector(sliderOfSelector);
    const sliderHidden = document.createElement("div");
    sliderHidden.className = "slider-hidden";

    const sliderTrack = document.createElement("div");
    sliderTrack.className = "slider-track";

    const slides = Array.from(sliderElement.children);

    slides.forEach(slide => {
        sliderTrack.insertAdjacentElement("beforeend", slide);
    });

    sliderHidden.insertAdjacentElement("beforeend", sliderTrack); 
    sliderElement.insertAdjacentElement("beforeend", sliderHidden);
    
    const arrowLeft = document.createElement("button");
    arrowLeft.classList.add("arrow-left", "arrow");
    const leftSprite =
    `
        <svg class="arrow-icon" width="166" height="292" viewBox="0 0 166 292">
            <use href="./img/icons/sprites.svg#arrowLeft"></use>
        </svg>
    `;
    arrowLeft.insertAdjacentHTML("beforeend", leftSprite);

    const arrowRight = document.createElement("button");
    arrowRight.classList.add("arrow-right", "arrow");
    const rightSprite = 
    `
    <svg class="arrow-icon" width="166" height="292" viewBox="0 0 166 292">
    <use href="./img/icons/sprites.svg#arrowRight"></use>
    </svg>
    `;
    arrowRight.insertAdjacentHTML("beforeend", rightSprite);

    sliderElement.insertAdjacentElement("beforeend", arrowLeft);
    sliderElement.insertAdjacentElement("beforeend", arrowRight);

    const pagination = document.createElement("div");
    pagination.className = "pagination";

    for (let i = 0; i < slides.length; i++) {
        const buttonPagination = document.createElement("button")
        buttonPagination.className = "button-pagination";

        pagination.insertAdjacentElement("beforeend", buttonPagination);
    }

    sliderElement.insertAdjacentElement("beforeend", pagination);

}

initialSlider("#slider");