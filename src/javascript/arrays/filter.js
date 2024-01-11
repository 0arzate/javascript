const original = [2, 4, 7, 9, 10]

const thisArg = { name: "example" }

const clone = original.filter(function(element, index, array) {
    console.log({element, index, array }, "this:", this)

    if(element > 8) return element
}, thisArg)

console.log({ original, clone })