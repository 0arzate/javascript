const strings = ["Almendra", "Piedra", "Tijeras", "Calabaza", "Dados"]
const numbers = [1, 10, 5, 3, 9, 7]

console.log(numbers.sort())

console.log(strings.sort((elementA, elementB) => {
    const compare = elementA.localeCompare(elementB)
    console.log({ elementA, elementB, compare })
    return compare
}))

console.log(numbers.sort((elementA, elementB) => {
    const compare = elementA - elementB
    console.log({ elementA, elementB, compare })
    return compare
}))