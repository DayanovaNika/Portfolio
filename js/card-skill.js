const cardList = document.querySelector("#cardList");
const fade = document.querySelector("#fade");

cardList.addEventListener("click", (e) => {
    const isCard = e.target.closest("[data-card]");
    const isCross = e.target.closest("[data-cross]");

    if (isCard) {
        isCard.classList.add("open");
        fade.classList.add("open");
    }

    if (isCross) {
        isCard.classList.remove("open");
        fade.classList.remove("open");
    }
})

const arr = ["апельсин", "apple", "banan", "avocado", "watermelon"]; 
console.log(arr);

// arr.push("cucumber");
// arr.unshift("mango");
// arr.pop();
// arr.shift();

// arr.splice(2,1)
// arr.splice(1,3, "огурец", "tomatoes", "potatoes");
// arr.splice(3,0, "snikers") 
// const copyArr = arr.slice(1,3)
// console.log(copyArr);

// let i = 0;
// while (i < arr.length) {
//     console.log(arr[i]);
//     i++;
// }

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let i = 99; i >= 30; i--) {
//     console.log(i);
// }

// const user = {
//     name: "july",
//     age: 30,
//     adress: {
//         country: "russia", 
//         city: "moscow", 
//     }, 
//     sayHi: function(){
//         console.log(`my name is ${this.name} i from ${this.adress.city}`);
//     }
// }
// console.log(user);
// user.sayHi();