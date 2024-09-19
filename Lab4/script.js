const imgArray = [
    "3pc-chicken-strip.jpg", 
    "5pc-chicken-strip.jpg",
    "bone-in-wings.jpg",
    "boneless-chicken-wings.jpg",
    "chicken-nuggets.jpg"
];
const titleArray = [
    "3pc Chicken Strips", 
    "5pc Chicken Strips",
    "Bone In Wings",
    "Boneless Chicken Wings",
    "Chicken Nuggets"
];
const priceArray = [
    "$5.99", 
    "$8.99", 
    "$9.99", 
    "$12.99", 
    "$5.99" 
];
const descArray = [
    "3pc Juicy Chicken Strips that are 4 inces long each", 
    "5pc Juicy Chicken Strips that are 4 inches long each",
    "The most flavorful of the selections",
    "Extra cripsy and tossed in wet sauce or dry rub",
    "Kid friendly or adult with weird habits approved"
];

const img = document.getElementsByClassName("menu-item");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
let counter = 0;

// Function to update the image source
function updateCard(c) {
    const path = `/Lab4/assets/${imgArray[c]}`;
    img[0].src = path;
    const title = `/Lab4/assets/${titleArray[c]}`;
    document.getElementById("card-title").textContent = titleArray[c];
    const price = `/Lab4/assets/${priceArray[c]}`;
    document.getElementById("price").textContent = priceArray[c];
    const desc = `/Lab4/assets/${descArray[c]}`;
    document.getElementById("description").textContent = descArray[c];
}

nextBtn.addEventListener('click', (event) => {
    event.preventDefault();
    if (counter > imgArray.length - 1) {
        counter = 0; // Loop back to the first image
    }
    updateCard(counter++);
});

prevBtn.addEventListener('click', (event) => {
    event.preventDefault();
    if (counter <= 1) {
        counter = imgArray.length - 1; // Loop back to the last image
    }
    updateCard(counter--);
});

// Initial image display
updateCard(counter);
