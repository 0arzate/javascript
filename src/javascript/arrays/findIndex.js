const original = ['A', 'B', 'C', 'D']

const thisArg = { example: "value here" }

const findIndex = original.findIndex(function(element, index, array) {
    console.log({ element, index, array }, "thisArg:", this)

    return element === "C"
}, thisArg)

console.log({ findIndex, original })