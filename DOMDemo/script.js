// alert("Connected")

let food = document.getElementById("fruit");
console.log(food);

let food2 = document.getElementsByClassName("breakfast");
console.log(food2);

let food3 = document.getElementsByTagName("li");
console.log(food3[1].textContent);
food3[1].textContent = "SOLD OUT!";

let food4 = document.querySelector("#fruit");
console.log(food4);

let food5 = document.querySelectorAll("h1");
console.log(food5);

food.style.color = "green";
food.style.border = "5px dashed green";
food.style.boxShadow = "5px 5px lightgreen";
food.style.margin = "20px";
food.style.fontSize = "64px";
food.style.fontStyle = "Italic";
food.style.textShadow = "3px 1px lightgreen";
food.style.textAlign = "center";

let ul = document.querySelector("ul");
console.log(ul);
let li = document.querySelector("li");
li.innerHTML = "Chocolate <b>Hazelnut</b>";

let costco = document.querySelector("a").getAttribute("href");
console.log(costco);
document.querySelector("a").setAttribute("href", "http://www.amazon.com");

// let newType = document.getElementsByTagName("input");
// newType[0].setAttribute("type", "password");

let input = document.querySelectorAll("[type='text']");
// input[0].setAttribute("type", "password");
// console.log(input[0].value);

let submitButton = document.querySelector('button[type="submit"]');
submitButton.addEventListener("click", (event)=> {
    event.preventDefault(); //Stops the auto refresh default from submit button
    let fname = input[0].value;
    let lname = input[1].value;
    let fullName = fname + " " + lname;
    console.log("Full Name: " + fullName);
    input[0].value = " ";
    input[1].value = " ";
})
// let resetButton = document.querySelector('button[type="reset"]');
// resetButton.("reset", (event)=> {
//     event.resetButton;
// })