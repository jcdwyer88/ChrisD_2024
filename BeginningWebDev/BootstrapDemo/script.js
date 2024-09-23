const imgArray = ["1.jpg", "2.jpg", "3.jpg"];
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const img = document.getElementsByTagName("img");

let counter = 0;

nextBtn.addEventListener("click", ()=> {
    counter++;
    if(counter >= imgArray.length) {
        counter = 0;
    } else {
        let path = `./assets/${imgArray[counter]}`;
        img[0].src = path;
    }
})
prevBtn.addEventListener("click", ()=> {
    counter--;
    if(counter <= 0) {
        counter = imgArray.length;
    } else {
        let path = `./assets/${imgArray[counter]}`;
        img[0].src = path;
    }
})