const viewImage = document.querySelector(".view-image");
const seeImage = document.querySelectorAll(".quick-see-image");
const imageList = document.querySelectorAll(".image-container img");
const arrayImage = Array.from(seeImage);
console.log(arrayImage);
let mainImage = document.querySelector(".image img");
let index = 0;
seeImage.forEach((item) => {
    if (index === arrayImage.length) {
        index = 0;
    } else {
        item.addEventListener("click", (event) => {
            console.log(event.currentTarget);
            console.log(arrayImage.indexOf(event.target.classList));
            mainImage.src = imageList[index].src;
            viewImage.classList.add("active");
            index++;
        });
    }
});
viewImage.addEventListener("click", (event) => {
    if (event.target.classList.contains("view-image")) {
        event.target.classList.remove("active");
    }
});

const iconLeft = document.querySelector(".icon-left");
const iconRight = document.querySelector(".icon-right");

// console.log(arrayImage[0].currentSrc);
// const changeImage = () => {
//     iconLeft.addEventListener('click', () => {

//     });
// }
