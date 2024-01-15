const strings = ["Hi", "WORD", "how", "ARE", "you?"]
const numbers = [10, 20, 1, 2, 3]

const hasString = strings.includes("H")
const hasNumber = numbers.includes(2, 2)

console.log({ strings, hasString })
console.log({ numbers, hasNumber })