// 1. найти в ДОМ заготовку +
// 2. создать slider-hidden +
// 3. создать track +
// 4. вставить слайды в track +
// 5. вставить track в slider-hidden +
// 6. slider-hidden вставить в слайдер +
// 7. создать стрелки в слайдер
// 8. создать пагинацию в слайдере

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
    arrowLeft.className = "arrow-left";

    const arrowRight = document.createElement("button");
    arrowRight.className = "arrow-right";

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