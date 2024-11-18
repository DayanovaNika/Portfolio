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
    
    

}

initialSlider("#slider");