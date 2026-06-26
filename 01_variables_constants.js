// variables and constants
// 3 ways to create a variable: var, let, const

var name = "krish"      // old way, avoid using var
let age = 18            // use let when the value will change
const PI = 3.14         // use const when the value will NOT change

// var is function scoped
// let and const are block scoped  (block = anything inside {})

// you cannot redeclare with let or const
// let age = 20   <-- this would throw an error


// Data Types
// Primitive (stored directly in memory)
let myString = "hello"          // String
let myNumber = 42               // Number
let myBool = true               // Boolean
let nothing = null              // Null (intentionally empty)
let notDefined = undefined      // Undefined (declared but no value)

// Reference types (stored as address/reference in memory)
let myArray = [1, 2, 3]
let myObject = { name: "krish", age: 18 }

// this is the difference between primitive and reference
// primitive = copies the value
// reference = copies the address (so both variables point to same thing in memory)

let a = 10
let b = a       // b gets a COPY of 10
b = 99
console.log(a)  // still 10 -- changing b didn't affect a

let arr1 = [1, 2, 3]
let arr2 = arr1     // arr2 points to the SAME array in memory
arr2.push(4)
console.log(arr1)   // [1, 2, 3, 4] -- arr1 also changed!


// typeof operator
console.log(typeof myString)    // "string"
console.log(typeof myNumber)    // "number"
console.log(typeof myBool)      // "boolean"
console.log(typeof null)        // "object" -- this is a known JS bug, null is NOT an object

// type conversion
let num = Number("42")      // string to number
let str = String(42)        // number to string
let bool = Boolean(0)       // 0 becomes false, anything else is true
