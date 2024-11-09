const form = document.querySelector("#form");

const addFocus = (e) => {
    const isInput = e.target.closest("[data-input]");

    if (isInput) {
        const isItem = isInput.closest("[data-item]");

        const isPlaceholder = isItem.querySelector("[data-placeholder]");

        isPlaceholder.classList.add("open");

        isInput.addEventListener("blur", removeFocus);
    }
    
}

const removeFocus = (e) => {
    const isInput = e.target.closest("[data-input]");

    if (isInput) {
        const isItem = isInput.closest("[data-item]");

        const isPlaceholder = isItem.querySelector("[data-placeholder]");

        if (isInput.value.length < 1) {
            isPlaceholder.classList.remove("open");
        }

        isInput.removeEventListener("blur", removeFocus);
    }
}

form.addEventListener("click", addFocus);

