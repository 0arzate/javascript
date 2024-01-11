const array = [1, 2, 3, 4, 5]

const thisArg = { arg: "Example" }

const haveGreaterThanFour = array.some(function(element, index, array){
    console.log({ element, index, array }, "this:", this)

    return element > 4
}, thisArg)

console.log({ haveGreaterThanFour })