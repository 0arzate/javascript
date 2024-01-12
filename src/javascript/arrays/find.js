const original = [
    { letter: "A" },
    { letter: "B" },
    { letter: "C" },
    { letter: "D" },
]

const thisArg = { example: "value here" }

const findElement = original.find(function(element, index, array) {
    console.log({ element, index, array }, "thisArg:", this)

    return element.letter === "C"
}, thisArg)

findElement.letter = "CC"

console.log({ findElement, original })