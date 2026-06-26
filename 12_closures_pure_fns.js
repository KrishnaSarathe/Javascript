// closures, pure functions, and IIFE
// closures are one of the most important (and confusing) JS concepts
// once i understood this it clicked everything else about functions


// CLOSURES
// a closure is when an inner function "remembers" variables from its outer function
// even after the outer function has finished running

// outer function runs and returns inner function
function makeCounter() {
    let count = 0       // this variable should be gone after makeCounter() runs... right?
    
    return function() {
        count++         // but inner function still has access to count!
        console.log(count)
    }
}

let counter1 = makeCounter()    // makeCounter runs and returns the inner function
let counter2 = makeCounter()    // separate counter, separate count variable

counter1()  // 1
counter1()  // 2
counter1()  // 3
counter2()  // 1 -- counter2 has its own count, not shared with counter1

// the inner function "closed over" the 'count' variable -- that's a closure
// count is preserved because the inner function holds a reference to it


// practical use -- data privacy
// count is not directly accessible from outside
// you can only change it through the returned functions (increment/decrement/reset)
function createPrivateCounter() {
    let count = 0   // private -- no one outside can directly touch this

    return {
        increment: () => ++count,
        decrement: () => --count,
        reset: () => { count = 0 },
        getCount: () => count
    }
}

let myCounter = createPrivateCounter()
myCounter.increment()
myCounter.increment()
myCounter.increment()
console.log(myCounter.getCount())   // 3
// console.log(count)               // error! count is private


// PURE FUNCTIONS
// a pure function always returns same output for same input
// and has no side effects (doesn't modify anything outside itself)

// PURE -- only uses its parameters, no outside variables
function addPure(a, b) {
    return a + b
}
console.log(addPure(3, 4))  // always 7

// IMPURE -- depends on outside variable
let tax = 0.18
function addWithTax(price) {
    return price + price * tax  // depends on 'tax' -- if tax changes, result changes
}

// IMPURE -- modifies something outside
let users = ["krish", "harsh"]
function addUser(name) {
    users.push(name)    // modifying external array -- side effect!
}

// pure version
function addUserPure(usersList, name) {
    return [...usersList, name]     // returns new array, doesn't touch original
}
let newUsers = addUserPure(users, "someone")
console.log(users)      // unchanged
console.log(newUsers)   // has the new user


// IIFE -- Immediately Invoked Function Expression
// a function that runs as soon as it is defined
// wrapping in () makes it an expression, then () at end calls it immediately

;(function() {
    let privateVar = "you cant access me from outside"
    console.log("IIFE ran!", privateVar)
})()

// arrow IIFE
;(() => {
    console.log("arrow IIFE also works")
})()

// useful for creating a private scope -- variables inside dont pollute global scope
// was very common before let/const existed (when only var was there)

;(function() {
    var oldStylePrivate = "was useful before let/const"
    console.log(oldStylePrivate)
})()

// the semicolon before is a safety habit some devs use when chaining IIFEs
