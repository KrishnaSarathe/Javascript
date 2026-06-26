// DOM Manipulation
// DOM = Document Object Model
// when browser loads HTML, it converts it into a tree of objects (the DOM)
// JS can then access and change that tree -- that's how websites become interactive


// SELECTING ELEMENTS

// getElementById -- returns single element by id
let demoText = document.getElementById("demo-text")

// querySelector -- returns FIRST matching element (uses CSS selector syntax)
let section1 = document.querySelector("#section-1")
let firstBox = document.querySelector(".box")

// querySelectorAll -- returns ALL matching elements as a NodeList
let allBoxes = document.querySelectorAll(".box")
console.log(allBoxes.length)    // how many .box elements there are


// CHANGING CONTENT

function changeText() {
    // textContent -- just plain text, no HTML
    demoText.textContent = "text changed using JS!"
}

function changeHTML() {
    // innerHTML -- can include HTML tags
    demoText.innerHTML = "<strong>bold text</strong> with <em>italic</em>"
}


// CHANGING STYLES AND CLASSES

let styledPara = document.querySelector("#styled-para")

function addHighlight() {
    styledPara.classList.add("highlight")       // adds the class
}

function removeHighlight() {
    styledPara.classList.remove("highlight")    // removes the class
}

function toggleHighlight() {
    styledPara.classList.toggle("highlight")    // adds if not there, removes if there
}

// can also directly change style with JS (not the best practice but works)
// styledPara.style.color = "red"
// styledPara.style.fontSize = "20px"


// EVENT LISTENERS
// addEventListener(event, callback)
// better than onclick in HTML because we can add multiple listeners

let clickBtn = document.querySelector("#click-btn")
let hoverBtn = document.querySelector("#hover-btn")
let output = document.querySelector("#output")

let clickCount = 0

clickBtn.addEventListener("click", function() {
    clickCount++
    output.textContent = "clicked " + clickCount + " time(s)"
})

hoverBtn.addEventListener("mouseenter", function() {
    output.textContent = "mouse entered the button"
    hoverBtn.style.background = "#9333ea"
})

hoverBtn.addEventListener("mouseleave", function() {
    output.textContent = "mouse left the button"
    hoverBtn.style.background = ""      // reset to original
})


// CREATING ELEMENTS DYNAMICALLY
// createElement, appendChild, textContent

let cardContainer = document.querySelector("#card-container")
let cardCount = 0

let animeList = ["Naruto", "JJK", "AOT", "Bleach", "One Piece", "HxH", "Vinland Saga"]

function addCard() {
    if (cardCount >= animeList.length) {
        cardCount = 0   // reset
        cardContainer.innerHTML = ""
    }

    let card = document.createElement("div")    // creates a <div>
    card.classList.add("card")
    card.textContent = animeList[cardCount]

    // add a click event to each card
    card.addEventListener("click", function() {
        this.style.opacity = "0.4"
        this.textContent = "✓ " + this.textContent
    })

    cardContainer.appendChild(card)     // puts it inside the container
    cardCount++
}


// DYNAMIC LIST with add and delete
let listInput = document.querySelector("#list-input")
let dynamicList = document.querySelector("#dynamic-list")

function addToList() {
    let val = listInput.value.trim()    // .trim() removes spaces from start/end

    if (val === "") return  // don't add empty items

    // create list item
    let li = document.createElement("li")
    li.textContent = val

    // create delete button (as a span)
    let deleteBtn = document.createElement("span")
    deleteBtn.textContent = "✕"
    deleteBtn.addEventListener("click", function() {
        li.remove()     // removes the entire li from DOM
    })

    li.appendChild(deleteBtn)
    dynamicList.appendChild(li)

    listInput.value = ""    // clear input after adding
    listInput.focus()       // put cursor back in input
}

// allow pressing Enter to add item too
listInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addToList()
    }
})


// RANDOM COLOR GENERATOR
let colorBox = document.querySelector("#color-box")

function changeColor() {
    // generate a random hex color
    let randomHex = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")
    colorBox.style.background = randomHex
    colorBox.title = randomHex  // shows on hover
}
