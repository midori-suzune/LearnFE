const viewImage = document.querySelector(".view-image");
const seeImage = document.querySelectorAll(".quick-see-image");
const imageList = document.querySelectorAll(".image-container img");
let mainImage = document.querySelector(".image img");
seeImage.forEach((item, key) => {
    item.addEventListener("click", (event) => {
        mainImage.src = imageList[key].src;
        viewImage.classList.add("active");
    });
});

const iconLeft = document.querySelector(".icon-left");
const iconRight = document.querySelector(".icon-right");

const changeImage = () => {
    let index = 0;
    iconLeft.addEventListener('click', () => {
        let currentImage = mainImage;
        imageList.forEach((e, key) => {
            if (e.src === currentImage.src) {
                index = key;
            }
        });
        if (index > 0) {
            mainImage.src = imageList[index - 1].src;
        }
        index--;
    });
    iconRight.addEventListener('click', (right) => {
        let currentImage = mainImage;
        imageList.forEach((e, key) => {
            if (e.src === currentImage.src) {
                index = key;
            }
        });
        if (index < ( imageList.length - 1 )  ) {
            mainImage.src = imageList[index + 1].src;
        }
        index++;
    });
};

changeImage();

viewImage.addEventListener("click", (event) => {
    if (event.target.classList.contains("view-image")) {
        event.target.classList.remove("active");
    }
});


