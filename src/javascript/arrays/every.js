const array = [2, 4, 6, 8]

const thisArg = { example: "arg" }

const allArePeers = array.every(function(element, index, array){
    console.log({ element, index, array }, "this:", this)

    return element % 2 === 0
}, thisArg)

console.log({ allArePeers })