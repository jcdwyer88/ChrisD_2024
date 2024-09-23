import {Person, getFullName} from "./helper";

let people: Person[] = [
    {
        fname: "George",
        lname: "of the jungle",
        isMarried: true,
        children: [],
        getAge(num, fname) {
            console.log(fname + num);
            return num * 10;
        }
    }
]

console.log(getFullName);
console.log(people[0].getAge(34, people[0].fname));

