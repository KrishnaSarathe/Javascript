// hoisting and scoping
// these are concepts about how JS runs code behind the scenes


// HOISTING
// before your code runs, JS scans the file and "hoists" declarations to the top
// so it moves variable/function declarations up (not assignments, just declarations)

// function declarations are FULLY hoisted
greet()     // this works even before the function is defined!

function greet() {
    console.log("hello from hoisted function")
}

// var is hoisted but as undefined
console.log(myVar)      // undefined -- not an error! var was hoisted
var myVar = "i exist now"
console.log(myVar)      // "i exist now"

// let and const are hoisted but NOT initialized (temporal dead zone)
// console.log(myLet)   // this would throw a ReferenceError
let myLet = "let value"



// EXECUTION CONTEXT
// when JS runs, it creates a "Global Execution Context"
// every function call creates a new "Function Execution Context"
// they are managed using a CALL STACK (last in first out)

// Creation phase: memory is set up (variables = undefined, functions = stored fully)
// Execution phase: code runs line by line

function first() {
    console.log("first function")
    second()
}

function second() {
    console.log("second function")
    third()
}

function third() {
    console.log("third function")
}

// call stack:
// third is added, then removed
// second is added, then removed
// first is added, then removed
first()


// SCOPE CHAIN
// when JS looks for a variable, it looks in current scope
// if not found, it goes to outer scope, then further out
// this chain of looking outward is the scope chain

let outerVar = "i am outer"

function outerFn() {
    let middleVar = "i am middle"
    
    function innerFn() {
        let innerVar = "i am inner"
        
        console.log(innerVar)   // found in its own scope
        console.log(middleVar)  // not found locally, found in outerFn scope
        console.log(outerVar)   // found in global scope
    }
    
    innerFn()
    // console.log(innerVar)    // error -- inner scope is not accessible from outside
}

outerFn()


// LEXICAL SCOPE
// a function can access variables from where it was DEFINED, not where it is called
// this is called lexical scope

let language = "JavaScript"

function sayLanguage() {
    // this function was defined in global scope
    // so it has access to 'language'
    console.log("learning:", language)
}

function start() {
    let language = "Python"     // this creates a new local variable
    sayLanguage()               // but sayLanguage still uses the global 'language'
}

start()     // prints "learning: JavaScript" -- NOT Python
