// arrays
// used to store multiple values in a single variable
// arrays are ordered and zero indexed (first element is at index 0)

let anime = ["Naruto", "JJK", "AOT", "Demon Slayer", "One Piece"]

console.log(anime[0])       // Naruto
console.log(anime[2])       // AOT
console.log(anime.length)   // 5


// adding and removing elements
anime.push("Bleach")            // adds to the END
anime.pop()                     // removes from the END, returns the removed element

anime.unshift("HxH")           // adds to the BEGINNING
anime.shift()                   // removes from the BEGINNING

console.log(anime)


// splice -- the powerful one, can add/remove anywhere
// splice(startIndex, deleteCount, ...itemsToAdd)

anime.splice(2, 0, "Vinland Saga")     // at index 2, delete 0, add "Vinland Saga"
anime.splice(1, 2)                     // at index 1, delete 2 items

console.log(anime)


// slice -- returns a portion of the array (doesn't modify original)
// slice(start, end)  -- end is NOT included
let top3 = anime.slice(0, 3)
console.log(top3)


// indexOf -- find the position of an element
console.log(anime.indexOf("JJK"))       // returns index, or -1 if not found

// includes -- check if something exists
console.log(anime.includes("Naruto"))   // true or false


// join -- converts array to string
let joined = anime.join(" | ")
console.log(joined)


// reverse
let nums = [1, 2, 3, 4, 5]
nums.reverse()          // modifies the original!
console.log(nums)


// sort -- by default sorts as strings (alphabetically), careful with numbers!
let names = ["banana", "apple", "mango"]
names.sort()
console.log(names)      // ["apple", "banana", "mango"]

let numbers = [10, 2, 30, 4]
numbers.sort()
console.log(numbers)    // [10, 2, 30, 4] -- WRONG! it sorted as strings

// correct way to sort numbers
numbers.sort((a, b) => a - b)      // ascending
numbers.sort((a, b) => b - a)      // descending
console.log(numbers)


// concat -- merge two arrays
let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]
let merged = arr1.concat(arr2)
console.log(merged)


// spread operator alternative for merging
let merged2 = [...arr1, ...arr2]
console.log(merged2)
