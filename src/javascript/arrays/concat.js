const array = [1, 2, 3, 4, 5]
const strings = ["uno", "dos", "tres"]
const objects = [{name: "Jose"}, {name: "Osvaldo"}]
const arrays = [[6, 7], [8, 9]]

const newArray = array.concat("cuatro", "cinco", strings, objects, arrays, {name: "Daniel"})

console.log(newArray)