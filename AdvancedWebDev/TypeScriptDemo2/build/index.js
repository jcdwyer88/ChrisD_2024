"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helper_1 = require("./helper");
let people = [
    {
        fname: "George",
        lname: "of the jungle",
        isMarried: true,
        children: [],
        // getFullName: function () {
        //     return `${this.fname} ${this.lname}`
        // },
        getAge(num, fname) {
            console.log(fname + num);
            return num * 10;
        }
    }
];
console.log(helper_1.getFullName);
console.log(people[0].getAge(34, people[0].fname));