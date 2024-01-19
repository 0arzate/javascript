const numbers = [1, 2, 3, 4, 5]
const objects = [{name: "osvaldo"}, {name: "pedro"}, {name: "David"}]
const arrays = [[1, 2], [3, 4], [5, 6]]
const nullValues = ["Hola", null, null, "mundo"]

const stringOfNumbers = numbers.join("-")
const stringOfObject = objects.join("#")
const stringOfArrays = arrays.join("@")
const stringOfNull = nullValues.join("/")

console.log(stringOfNumbers)
console.log(stringOfObject)
console.log(stringOfArrays)
console.log(stringOfNull)