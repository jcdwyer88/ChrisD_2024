// MENU Script
const menuArray = [
    {
        image: "3pc-chicken-strip.jpg",
        alt: "3 piece chicken strip on plate",
        title: "1: 3pc Chicken Strips",
        price: "5.99",
        description: "3pc Juicy Chicken Strips that are 4 inches long each"
    },
    {
        image: "5pc-chicken-strip.jpg",
        alt: "5 piece chicken strip on plate",
        title: "2: 5pc Chicken Strips",
        price: "8.99",
        description: "5pc Juicy Chicken Strips that are 4 inches long each"
    },
    {
        image: "bone-in-wings.jpg",
        alt: "Bone in chicken wings on plate",
        title: "3: Bone In Wings",
        price: "9.99",
        description: "The most flavorful of the selections"
    },
    {
        image: "boneless-chicken-wings.jpg",
        alt: "Boneless chicken wings on plate",
        title: "4: Boneless Wings",
        price: "12.99",
        description: "Extra crispy and tossed in wet sauce or dry rub"
    },
    {
        image: "chicken-nuggets.jpg",
        alt: "Chicken nuggets on plate",
        title: "5: Chicken Nuggets",
        price: "4.99",
        description: "Kid friendly or adult with weird habits approved"
    }
];

const img = document.getElementsByClassName("menu-item");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
let counter = 0;

// Function to update the information on the card
function updateCard() {
    const path = `/Lab4/assets/${menuArray[counter].image}`;
    img[0].src = path;
    img[0].alt = menuArray[counter].alt;
    document.getElementById("card-title").innerText = menuArray[counter].title;
    document.getElementById("price").innerText = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(menuArray[counter].price);
    document.getElementById("description").innerText = menuArray[counter].description;
}
// Function to move to the next image in the array onclick of next button
function nextImage() {
    counter++
    if (counter >= menuArray.length) {
        counter = 0; // Loop back to the first image
    }
    updateCard();
}
// Function to move to the previous image in the array onclick of prev button
function prevImage() {
    counter--;
    if (counter < 0) {
        counter = menuArray.length - 1; // Loop back to the last image
    }
    updateCard();
}
// Initial image display
updateCard();
// END MENU SCRIPT