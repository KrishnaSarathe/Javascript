// conditionals
// used to run different code based on whether something is true or false

let age = 18
let marks = 75

if (marks >= 90) {
    console.log("A grade")
} else if (marks >= 75) {
    console.log("B grade")
} else if (marks >= 60) {
    console.log("C grade")
} else {
    console.log("fail")
}


// ternary operator -- shortcut for simple if-else
// condition ? "if true" : "if false"
let isAdult = age >= 18 ? "adult" : "not adult"
console.log(isAdult)


// switch -- better when checking one variable against many fixed values
let day = "Monday"

switch (day) {
    case "Saturday":
    case "Sunday":
        console.log("weekend!")
        break
    case "Monday":
        console.log("back to grind")
        break
    default:
        console.log("just a weekday")
}


// truthy and falsy values -- important concept!
// these are FALSY (they behave like false in a condition):
// false, 0, "", null, undefined, NaN
// everything else is truthy

if ("") {
    console.log("this won't run")
}

if ("krish") {
    console.log("this will run because non-empty string is truthy")
}

if (0) {
    console.log("won't run -- 0 is falsy")
}

if (1) {
    console.log("will run -- any non-zero number is truthy")
}


// logical operators
// && (and) -- both must be true
// || (or) -- at least one must be true
// ! (not) -- flips true to false

let x = 10
console.log(x > 5 && x < 20)   // true
console.log(x > 50 || x < 20)  // true (second condition is true)
console.log(!true)              // false
