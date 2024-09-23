// here is an array of strings
let dogArray: string[] = ["Atlas", "Ranger", "Tony"];
// here is an array of numbers
let numArray: number[] = [12, 23, 35];
let movieArray: object[] = [];
// function
// data types for params and args
// data types for returned values

const getAge = (num: number, fname:string = "JD", isMarried: boolean = false): number => {
    return num * 4;
};
let result = getAge(34);
console.log(result);
