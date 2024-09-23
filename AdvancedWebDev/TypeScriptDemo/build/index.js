// here is an array of strings
let dogArray = ["Atlas", "Ranger", "Tony"];
// here is an array of numbers
let numArray = [12, 23, 35];
let movieArray = [];
// function
// data types for params and args
// data types for returned values
const getAge = (num, fname = "JD", isMarried = false) => {
    return num * 4;
};
let result = getAge(34);
console.log(result);
