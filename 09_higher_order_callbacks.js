// higher order functions and callbacks
// a function that takes another function as argument OR returns a function
// callbacks are just functions passed into another function to run later


// basic callback example
function doTask(taskName, callback) {
    console.log("starting:", taskName)
    callback()      // calling the function that was passed in
}

doTask("studying JS", function() {
    console.log("task done!")
})

// can also pass arrow function
doTask("watching anime", () => {
    console.log("guilty pleasure done!")
})


// forEach -- loops through array, runs a function for each element
// returns nothing (undefined)
let anime = ["Naruto", "JJK", "AOT", "Bleach"]

anime.forEach(function(show, index) {
    console.log(index, show)
})

// with arrow function
anime.forEach((show) => console.log(show))


// map -- creates a NEW array by transforming each element
// doesn't change the original array
let numbers = [1, 2, 3, 4, 5]

let doubled = numbers.map(num => num * 2)
console.log(doubled)        // [2, 4, 6, 8, 10]
console.log(numbers)        // [1, 2, 3, 4, 5] -- original unchanged

let upperCase = anime.map(show => show.toUpperCase())
console.log(upperCase)


// filter -- creates a NEW array with only elements that pass the condition
let scores = [45, 82, 67, 91, 33, 78, 55]

let passing = scores.filter(score => score >= 60)
console.log(passing)        // [82, 67, 91, 78]

let longNames = anime.filter(show => show.length > 3)
console.log(longNames)


// reduce -- boils down an array to a single value
let total = numbers.reduce((accumulator, current) => {
    return accumulator + current
}, 0)       // 0 is the starting value of accumulator

console.log(total)      // 15

// another example -- find max value
let max = scores.reduce((acc, curr) => {
    return curr > acc ? curr : acc
}, 0)
console.log(max)        // 91


// chaining -- map, filter, reduce can be chained!
let result = scores
    .filter(score => score >= 60)   // first filter passing scores
    .map(score => score + 5)        // then add 5 bonus marks to each
    .reduce((acc, curr) => acc + curr, 0)   // then get total

console.log(result)


// find -- returns FIRST element that matches (not an array)
let firstPassing = scores.find(score => score >= 60)
console.log(firstPassing)   // 82 (first one that matched)

// findIndex -- same but returns the index
let firstPassingIndex = scores.findIndex(score => score >= 60)
console.log(firstPassingIndex)  // 1


// some -- returns true if AT LEAST ONE element passes
console.log(scores.some(score => score > 90))   // true (91 exists)

// every -- returns true only if ALL elements pass
console.log(scores.every(score => score > 30))  // true
console.log(scores.every(score => score > 50))  // false (45, 33 fail)
