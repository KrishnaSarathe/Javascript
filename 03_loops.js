// loops
// used to repeat something without writing the same code 100 times

// for loop -- when you know how many times to run
for (let i = 0; i < 5; i++) {
    console.log("count:", i)    // prints 0 1 2 3 4
}

// loop backwards
for (let i = 5; i >= 1; i--) {
    console.log(i)
}

// while loop -- runs as long as the condition is true
// use when you don't know exactly how many times to loop
let count = 0
while (count < 5) {
    console.log("while count:", count)
    count++     // dont forget to increment or it loops forever!
}


// do while -- runs at least once, then checks the condition
let num = 10
do {
    console.log("runs at least once:", num)
    num++
} while (num < 5)   // condition is false but it still ran once


// break and continue
// break -- exits the loop completely
for (let i = 0; i < 10; i++) {
    if (i === 5) break      // stops when i is 5
    console.log(i)
}

// continue -- skips the current iteration, continues with next
for (let i = 0; i < 10; i++) {
    if (i === 5) continue   // skips 5, keeps going
    console.log(i)
}


// looping through an array
let fruits = ["mango", "apple", "banana", "grapes"]

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}

// for...of -- cleaner way to loop through arrays
for (let fruit of fruits) {
    console.log(fruit)
}

// for...in -- loops through keys/indices of an object or array
let person = { name: "krish", age: 18, city: "ahmedabad" }

for (let key in person) {
    console.log(key, ":", person[key])
}
