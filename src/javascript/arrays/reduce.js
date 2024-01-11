const original = [1, 2, 3, 4, 5]

const thisArg = { value: "example" }

const onlyOneValue = original.reduce(function(currencyAmount, element, index, array) {
    console.log({ currencyAmount, element, index, array })

    return currencyAmount += element
}, 0, thisArg)

console.log({ original, onlyOneValue })