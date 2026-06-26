// 'this' keyword
// 'this' refers to whatever object is calling the function
// the value of 'this' changes depending on where and how a function is called
// this was confusing at first but makes sense once you see the pattern


// 1. global scope -- 'this' is the global object (window in browser, global in node)
console.log(this)   // in Node.js this prints {}


// 2. inside a regular function -- 'this' is global object (or undefined in strict mode)
function regularFn() {
    console.log(this)   // global object or undefined
}
regularFn()


// 3. inside an object method -- 'this' is the object that owns the method
let gojo = {
    name: "Satoru Gojo",
    technique: "Infinity",
    fight: function() {
        console.log(this.name + " uses " + this.technique)  // 'this' is the gojo object
    }
}

gojo.fight()    // "Satoru Gojo uses Infinity"


// 4. arrow functions -- 'this' is inherited from surrounding scope (lexical this)
// arrow functions do NOT have their own 'this'
let sukuna = {
    name: "Ryomen Sukuna",
    fight: () => {
        console.log(this.name)  // 'this' here is the outer scope (global), NOT sukuna!
    }
}

sukuna.fight()  // undefined -- this is a common mistake!

// that's why you should use regular functions as object methods, not arrow functions
// use arrow functions when you WANT 'this' from the outer scope (like in callbacks)


// 5. constructor function -- 'this' is the new object being created
function Character(name) {
    this.name = name    // 'this' is the object created by 'new'
}
let yuji = new Character("Yuji Itadori")
console.log(yuji.name)


// call(), apply(), bind() -- manually control what 'this' is

let person1 = { name: "krish" }
let person2 = { name: "harsh" }

function introduce(city, language) {
    console.log("hi i am " + this.name + " from " + city + ", i know " + language)
}

// call -- calls the function immediately, pass args one by one
introduce.call(person1, "Ahmedabad", "JavaScript")
introduce.call(person2, "Mumbai", "Python")

// apply -- same as call but args are passed as an array
introduce.apply(person1, ["Ahmedabad", "JavaScript"])

// bind -- returns a NEW function with 'this' permanently set (doesn't call it)
let introduceKrish = introduce.bind(person1, "Ahmedabad")
introduceKrish("JavaScript")     // can call later with remaining args
introduceKrish("CSS")


// practical example of why we need bind
let counter = {
    count: 0,
    start: function() {
        // without bind, 'this' inside the callback would be global (or undefined)
        setInterval(function() {
            // this.count++   // would fail -- 'this' is not the counter object here
        }, 1000)

        // with bind -- fixes it
        setInterval(function() {
            this.count++
            // console.log(this.count)
        }.bind(this), 1000)     // bind 'this' to the counter object

        // arrow function also fixes it (inherits 'this' from start method)
        setInterval(() => {
            this.count++
            // console.log(this.count)
        }, 1000)
    }
}
