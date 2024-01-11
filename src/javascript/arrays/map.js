const array = [1, 2, 3, 4]

const obj = {
    name: "Osvaldo"
}

const newArray = array.map(function(element, index, array) {
    console.log({element, index, array}, "this:", this)

    array[0] = 6

    return element + 1
}, obj)

const arrayObj = [{ name: "Osvaldo", age: 25 }, { name: "Jose", age: 30 }, { name: "Luis", age: 55 }]

const newArrayObj = arrayObj.map(obj => {
    return {
        ...obj,
        name: "Pedro"
    }
})

console.log("ORIGINAL:", arrayObj)
console.log("CLON:", newArrayObj)