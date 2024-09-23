let pets = ['Moxxi', 'Pickle', 'Hootchie'] //instantiates the list 'pets' with items
console.log(pets[0]) // Reference the item in index 0
console.log(pets)
console.log(pets.length) //displays how many items in list
let num = pets.length + 3
console.log(num)
let lastPet = pets[pets.length -1] //Reference the last pet in the list
console.log(lastPet)

console.log(pets.join(' - '))

let fruits = ["Apple", "Banana", "Orange", "Apple", "Tangerine"]

let apple = fruits.indexOf("Apple")
console.log(fruits.indexOf('Apple')) // Locates first instance of 'Apple'
console.log(fruits.indexOf('Apple', 1)) // Looks for 'Apple' starting at index 1
console.log(fruits.indexOf('Apple', 4))
console.log(fruits.indexOf('Mango'))

pets.push('MonkeyButt') // Appends 'MonkeyButt' to end of pets array
console.log(pets)
pets.pop() // Removes last item in pets array
console.log(pets)
let kitty = pets.pop() // Assignslast value of pets array and removes it from array
console.log(kitty)
pets.shift() // Removes first item in array and shifts all following items index to left
console.log(pets)
pets.unshift('DoggyO') // Adds 'DoggyO'to beginning of array
console.log(pets)

newNew = pets.slice() // Copies entire array to new array
console.log(newNew)
partialNew = pets.slice(1,3) // Start at index 1 and go to, but do not include, index 3
console.log(partialNew)

let numbers = [1,2,3,4,5] // Instantiates array with values
console.log(numbers) // Original array
for (let i = 0; i < numbers.length; i++){ // Iterates through array indexes
    numbers[i] = numbers[i] * 2 // Multiplies number by 2
}
console.log(numbers) // Array after iteration

pets.forEach (element => { // For each item in array
    console.log(element) // Print each item on new line
})
pets.forEach (function (element) { // Same as about without fat arrow '=>'
    console.log(element)
})

pets.forEach (element => { 
    console.log(pets.indexOf(element) + ": " + element) // Added the index number to the display
})

let square = numbers.map(num => num*num) // Squares the number
console.log(square)

pets = ['Moxxi', 'Pickle', 'Hootchie']
pets.sort() // Sort array based off ASCII values
console.log(pets)

let newNums = [100, 10, 4, 1, 3]
let sortedNums = newNums.sort((a,b) => a-b) // Built in function to order numbers ascending(b-a for descending)
console.log(sortedNums)

let words = ["spray", "limit", "elite", "exuberant", "destruction", "present"]
let longWords = words.filter(function(thisword){ // Built in filter function
    return thisword.length > 6 // Only return words greater tan 6 letters
})
console.log(longWords)
let testWords = words.filter(thisword => thisword.length > 6) // Same as above with fat arrow notation
console.log(testWords)