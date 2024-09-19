const imgArray = [
    "3pc-chicken-strip.jpg", 
    "5pc-chicken-strip.jpg", 
    "bone-in-wings.jpg",
    "boneless-wings.jpg",
    "chicken-nuggets.jpg"
];

const img = document.getElementsByClassName("menu-item");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
let counter = 0;

// Function to update the image source
function updateImage() {
    const path = `/assets/${imgArray[counter]}`;
    img[0].src = path;
}

nextBtn.addEventListener('click', (event) => {
    event.preventDefault();
    counter++;
    if (counter >= imgArray.length) {
        counter = 0; // Loop back to the first image
    }
    updateImage();
});

prevBtn.addEventListener('click', (event) => {
    event.preventDefault();
    counter--;
    if (counter < 0) {
        counter = imgArray.length - 1; // Loop back to the last image
    }
    updateImage();
});

// Initial image display
updateImage();