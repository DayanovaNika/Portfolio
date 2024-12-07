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

const handlerEvent = (e) => {
    const isLeftArrow = e.target.closest("[data-arrow='left']");
    const isRightArrow = e.target.closest("[data-arrow='right']");
    
    if (isLeftArrow) {
        // дз тут 
        // 1 прописать условие для движения трака в лево
        // 2 если ты на 1 слайде то при клике на левую стрелку должно прокрутить к последнему слайду
    }
    else if (isRightArrow) {
        if (currentSlide < slides.length - 1) {
            currentSlide += 1;
        } else {
            currentSlide = 0;
        }
        const currentMove = currentWidth * currentSlide;
        const sliderTrack = document.querySelector(".slider-track");
        sliderTrack.style.transform = `translateX(-${currentMove}px)`;
    }
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
