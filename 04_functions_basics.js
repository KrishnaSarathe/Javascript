// functions
// reusable block of code -- instead of writing same thing again and again

// function declaration
function greet(name) {
    console.log("hello", name)
}

greet("krish")
greet("harsh")      // calling the same function with different values


// function with return value
function add(a, b) {
    return a + b
}

let result = add(5, 3)
console.log(result)     // 8


// default parameters -- if no value is passed, use a default
function greetUser(name = "stranger") {
    console.log("hey", name)
}

greetUser()             // hey stranger
greetUser("krish")      // hey krish


// function expression -- storing a function in a variable
let multiply = function(a, b) {
    return a * b
}

console.log(multiply(4, 5))     // 20


// arrow function -- shorter syntax (from ES6)
let divide = (a, b) => a / b       // single line, no need for return keyword

let square = n => n * n             // single parameter, no parentheses needed

let sayHi = () => console.log("hi!")    // no parameters, need empty ()

console.log(divide(10, 2))      // 5
console.log(square(6))          // 36
sayHi()


// arrow functions are shorter but they behave differently with 'this'
// will see that later in OOP section


// scope -- where a variable can be accessed
let globalVar = "i am global"   // accessible everywhere

function testScope() {
    let localVar = "i am local"     // only accessible inside this function
    console.log(globalVar)          // can access global from inside
    console.log(localVar)
}

testScope()
// console.log(localVar)    // this would give an error -- localVar doesn't exist here
