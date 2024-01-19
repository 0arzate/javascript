const arrayOneLevel = [1, 2, 3, 4, [5, 6, 7]]
const arrayTwoLevel = [1, 2, [3, 4, [5, 6, 7]]]
const arrayInfinity = [1, 2, [3, 4, [5, 6, [7]]], [8, 9]]

console.log(arrayOneLevel.flat(1))
console.log(arrayOneLevel.flat(2))
console.log(arrayInfinity.flat(Infinity))

