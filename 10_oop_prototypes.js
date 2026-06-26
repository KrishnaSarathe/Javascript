// OOP - Object Oriented Programming
// the idea is to model real-world things as objects with properties and behaviors
// instead of writing individual variables and functions, we bundle them together


// constructor function -- a blueprint for creating multiple objects of same type
// by convention, constructor function names start with Capital letter
function Sorcerer(name, grade, technique) {
    this.name = name
    this.grade = grade
    this.technique = technique
    this.isAlive = true
}

// 'new' keyword does 3 things:
// 1. creates a new empty object
// 2. sets 'this' to that new object
// 3. returns the object automatically

let gojo = new Sorcerer("Satoru Gojo", "Special Grade", "Infinity")
let yuji = new Sorcerer("Yuji Itadori", "Grade 1", "Divergent Fist")

console.log(gojo)
console.log(yuji)


// PROTOTYPE
// adding methods directly inside constructor is wasteful
// every object would have its OWN copy of the function

// WRONG way:
function BadSorcerer(name) {
    this.name = name
    this.fight = function() {       // every BadSorcerer object gets its own copy of fight!
        console.log(this.name + " is fighting")
    }
}

// CORRECT way: add shared methods to the prototype
// all objects created by Sorcerer share this ONE function

Sorcerer.prototype.fight = function() {
    console.log(this.name + " is fighting using " + this.technique)
}

Sorcerer.prototype.die = function() {
    this.isAlive = false
    console.log(this.name + " has died")
}

gojo.fight()
yuji.fight()
gojo.die()
console.log(gojo.isAlive)


// prototype chain -- how JS looks for a property/method:
// 1. check the object itself
// 2. check its prototype
// 3. check prototype's prototype (Object.prototype)
// 4. if not found anywhere, returns undefined

// every object's __proto__ points to its constructor's prototype
console.log(gojo.__proto__ === Sorcerer.prototype)  // true
console.log(Sorcerer.prototype.__proto__ === Object.prototype)  // true


// PROTOTYPAL INHERITANCE -- one constructor inheriting from another
function CursedSpirit(name, origin) {
    this.name = name
    this.origin = origin
    this.grade = "Special Grade"
}

CursedSpirit.prototype.curse = function() {
    console.log(this.name + " curses everything")
}

// Object.create -- creates object with given prototype
let sukuna = Object.create(CursedSpirit.prototype)
sukuna.name = "Ryomen Sukuna"
sukuna.origin = "Human Fear of Death"

sukuna.curse()
