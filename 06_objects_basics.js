// objects
// used to group related data together as key-value pairs
// unlike arrays which use numbers as index, objects use named keys

let student = {
    name: "krish",
    age: 18,
    city: "ahmedabad",
    isEnrolled: true,
    marks: [85, 90, 78, 95]     // can have arrays inside objects
}


// accessing values
console.log(student.name)           // dot notation -- easier to read
console.log(student["age"])         // bracket notation -- useful when key is dynamic

let key = "city"
console.log(student[key])           // bracket notation when key is a variable


// adding a new property
student.grade = "A"
console.log(student)

// updating a property
student.age = 19
console.log(student.age)

// deleting a property
delete student.isEnrolled
console.log(student)


// methods -- functions inside an object
let gojo = {
    name: "Satoru Gojo",
    domain: "Unlimited Void",
    technique: "Infinity",
    fight: function() {
        console.log(gojo.name + " activated " + gojo.domain)
    }
}

gojo.fight()


// object inside object (nested)
let person = {
    name: "krish",
    address: {
        city: "ahmedabad",
        pincode: 380001
    }
}

console.log(person.address.city)
console.log(person.address.pincode)


// Object.keys() -- get all keys as an array
console.log(Object.keys(student))

// Object.values() -- get all values as an array
console.log(Object.values(student))

// Object.entries() -- get [key, value] pairs
console.log(Object.entries(student))


// destructuring -- cleaner way to pull values out of an object
let { name, age, city } = student
console.log(name, age, city)

// with rename
let { name: studentName } = student
console.log(studentName)

// spread in objects -- copy an object
let studentCopy = { ...student }
studentCopy.name = "someone else"
console.log(student.name)       // still "krish" -- spread creates a shallow copy
