const array = [1, 2, 3, 4]

const obj = {
    name: "Osvaldo"
}

const newArray = array.map(function(element, index, array) {
    console.log({element, index, array}, "this:", this)

    array[0] = 6

    return element + 1
}, obj)

console.log({ newArray })
console.log({ array })