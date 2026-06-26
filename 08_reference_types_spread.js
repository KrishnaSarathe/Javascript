// reference types and spread operator
// this took me a while to fully get

// the problem with reference types
// when you copy an array or object, you're copying the ADDRESS not the actual data

let original = [1, 2, 3]
let copy = original         // copy is NOT a new array -- it's the same array!

copy.push(99)
console.log(original)       // [1, 2, 3, 99] -- original also changed!
// this is because both variables point to the same location in memory


// same issue with objects
let obj1 = { a: 1, b: 2 }
let obj2 = obj1

obj2.a = 999
console.log(obj1.a)         // 999 -- obj1 changed too!


// SPREAD OPERATOR (...) -- creates a shallow copy
let arr1 = [1, 2, 3]
let arr2 = [...arr1]        // arr2 is a NEW array with same values

arr2.push(100)
console.log(arr1)           // [1, 2, 3] -- original is safe now!
console.log(arr2)           // [1, 2, 3, 100]


// spread with objects
let person1 = { name: "krish", age: 18 }
let person2 = { ...person1 }    // shallow copy

person2.name = "someone"
console.log(person1.name)       // "krish" -- not affected


// BUT spread is only SHALLOW copy
// nested arrays/objects are still shared by reference

let nested = { name: "krish", scores: [10, 20, 30] }
let nestedCopy = { ...nested }

nestedCopy.scores.push(99)      // modifying nested array
console.log(nested.scores)      // [10, 20, 30, 99] -- original affected!
// because spread copies the reference to 'scores' array, not the array itself


// how to do a DEEP copy (completely independent copy)
// use JSON.parse and JSON.stringify
let deepCopy = JSON.parse(JSON.stringify(nested))
deepCopy.scores.push(999)
console.log(nested.scores)      // not affected this time!
// note: this doesn't work with functions inside objects, only plain data


// other uses of spread
// merging arrays
let merged = [...arr1, ...arr2, 4, 5]
console.log(merged)

// merging objects
let defaults = { theme: "dark", lang: "en" }
let userSettings = { lang: "hi", fontSize: 16 }
let finalSettings = { ...defaults, ...userSettings }    // userSettings overwrites defaults
console.log(finalSettings)  // { theme: "dark", lang: "hi", fontSize: 16 }


// rest parameters (...) -- looks same as spread but does opposite
// collects multiple arguments into an array
function sum(...nums) {
    let total = 0
    for (let n of nums) {
        total += n
    }
    return total
}

console.log(sum(1, 2, 3))           // 6
console.log(sum(10, 20, 30, 40))    // 100
