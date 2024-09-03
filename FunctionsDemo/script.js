// function syntax
// named function

function nameOfFunction() {
  // code goes here
}

// to run function call it or invoke it
nameOfFunction();

// function to say hello

// function greeting() {
//   console.log("hello");
//   return true;
// }

// greeting();

// difference between arguments and parameters
// arguments are sent to a function
// parameters accept the values from the arguments

// function squareArea(length, width) {
//   return length * width;
// }

// let result = squareArea(2,3);
// console.log(result)
// console.log(squareArea(3,7))

// function areaRectangle(length = 5, width = 5) {
//   return length * width;
// }
// console.log(areaRectangle(6, 6));
// console.log(areaRectangle(6));
// console.log(areaRectangle(undefined, 6));

// anonymous functions do not have names
// (function () {
//   console.log("Who are you?");
// })();

// add named function
// function pluralize (element){
//     console.log(element + "'s");
// }
// let animals = ["Hephalump", "Woosle", "Bat"];
// // animals.forEach(function (doggy) { // callback function, a function within a function
// //   console.log(doggy + "'s");
// // });
// animals.forEach(pluralize);

// fat arrows are the modern way to write functions
// function greeting(){
//     console.log("hello");
// }
// let greetingArrow = () => console.log("hello"); // do everything this way if possible

// greeting();
// greetingArrow();

// let area = (length = 5, width = 5) => ((length *= 2) * width);
// console.log(area(5,6));

// let greeting = (arg) => `Hello, ${arg}`;
// console.log(greeting("Chris"));

let animals = ["Hephalump", "Woosle", "Bat"];
let multiples = (animal) => {
  let newAnimal = [];
  animals.forEach(el => newAnimal.push(el + "'s"))
    return newAnimal;
  }
  console.log("Original: " + animals);
  let manyAnimals = multiples(animals);
  console.log("New: " + manyAnimals);
  console.log(manyAnimals[manyAnimals.length-1]);