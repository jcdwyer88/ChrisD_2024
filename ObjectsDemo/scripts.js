let person = { // Creates object for array with specified values/types
    fname: "Walter",
    lname: "White",
    fullName: function(){
        return `${this.fname} ${this.lname}`
    },
    age: 50,
    family: ["Skylar", "Flynn", "Holly"], // Array within person object
    city: "albuquerque",
    smart: true,
    associates: { // Associates object inside person object
        friend: "Jesse",
        enemy: "Gus"
    },
    hobbies: "Cooking",
}

// console.log(person.fullName()) // Dot notation to reference 'fullName' from object 'person'
// console.log(person.family[2]) // Dot notation to find index 2 value in family
// console.log(person["family"][2]) // Bracket notation for the same
// console.log(person["associates"]["friend"])


// day 2
// destructuring

// let fname = person.fname
// let lname = person.lname
// let age = person.age
// console.log(`${fname} ${lname} is ${age} years old`)

// orrrrr
let {fname, lname, age, family} = person
console.log(`${fname} ${lname} is ${age} years old`)
console.log(family.length)

