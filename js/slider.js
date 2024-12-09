let currentWidth = 0;
let currentSlide = 0;
let slides = null;

const makeArrows = (parentElement) => {
    const arrowLeft = document.createElement("button");
    arrowLeft.classList.add("arrow-left", "arrow");
    arrowLeft.setAttribute("data-arrow", "left");

    const leftSprite =
    `
        <svg class="arrow-icon" width="166" height="292" viewBox="0 0 166 292">
            <use href="./img/icons/sprites.svg#arrowLeft"></use>
        </svg>
    `;
    arrowLeft.insertAdjacentHTML("beforeend", leftSprite);

    const arrowRight = document.createElement("button");
    arrowRight.classList.add("arrow-right", "arrow");
    arrowRight.setAttribute("data-arrow", "right");
    const rightSprite = 
    `
    <svg class="arrow-icon" width="166" height="292" viewBox="0 0 166 292">
    <use href="./img/icons/sprites.svg#arrowRight"></use>
    </svg>
    `;
    arrowRight.insertAdjacentHTML("beforeend", rightSprite);

    parentElement.insertAdjacentElement("beforeend", arrowLeft);
    parentElement.insertAdjacentElement("beforeend", arrowRight);
}

const makePagination = (parentElement) => {
    const pagination = document.createElement("div");
    pagination.className = "pagination";

    for (let i = 0; i < slides.length; i++) {
        const buttonPagination = document.createElement("button")
        buttonPagination.className = "button-pagination";
        buttonPagination.setAttribute("data-button-pagination", "");

        pagination.insertAdjacentElement("beforeend", buttonPagination);
    }

    parentElement.insertAdjacentElement("beforeend", pagination);
}

const makeSlides = (parentElement) => {
    const sliderHidden = document.createElement("div");
    sliderHidden.className = "slider-hidden";
    
    const sliderTrack = document.createElement("div");
    sliderTrack.className = "slider-track";

    slides = Array.from(parentElement.children);

    slides.forEach(slide => {
        sliderTrack.insertAdjacentElement("beforeend", slide);
    });

    sliderHidden.insertAdjacentElement("beforeend", sliderTrack); 
    parentElement.insertAdjacentElement("beforeend", sliderHidden);
}
const motion = () => {
    const currentMove = currentWidth * currentSlide;
    const sliderTrack = document.querySelector(".slider-track");
    sliderTrack.style.transform = `translateX(-${currentMove}px)`;
}
const chooseDirection = (direction) => {
    if (direction === "left") {
        currentSlide = currentSlide >= 0 ? currentSlide -= 1 : slides.length - 1;
    }
    else if (direction === "right") {
        currentSlide = currentSlide < slides.length - 1 ? currentSlide += 1 : currentSlide = 0;
    }
}
const handlerEvent = (e) => {
    const isLeftArrow = e.target.closest("[data-arrow='left']");
    const isRightArrow = e.target.closest("[data-arrow='right']");
    const isButtonPagination = e.target.closest("[data-button-pagination]");
    
    if (isLeftArrow) {
        chooseDirection("left");
    }
    else if (isRightArrow) {
        chooseDirection("right");
    }

    if (isButtonPagination) {
        const listButtons = Array.from(document.querySelectorAll("[data-button-pagination]"));
        const index = listButtons.indexOf(isButtonPagination);
        currentSlide = index;
    }
    motion();
}

const initialSlider = (sliderOfSelector) => {
    const sliderElement = document.querySelector(sliderOfSelector);

    makeSlides(sliderElement);

    makePagination(sliderElement);
    
    makeArrows(sliderElement);

    const slide = sliderElement.querySelector(".slider__slide");
    currentWidth = slide.offsetWidth;

    sliderElement.addEventListener("click", handlerEvent);
}

initialSlider("#slider");
