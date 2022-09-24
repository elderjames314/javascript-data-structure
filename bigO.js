let fruits = ["banana", "mango"]
fruits[2] = "lemon"

// console.log(fruits.shift())
// console.log(fruits)

fruits.splice(2, 0, "orange")
console.log(fruits)