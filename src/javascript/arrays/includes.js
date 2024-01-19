const numbers = [1, 2, 3, 4, 10, 11]
const jose = { name: 'Jose', adreess: { city: 'CDMX' } }
const pedro = { name: 'Pedro', adreess: { city: 'NL' } }

const objects = [jose, pedro]

const strings = ['Jose', 'Perez', 'Osavaldo', 'marlon', "Jose"]

const booleans = [true]

console.log(numbers.includes(2))
console.log(objects.includes(jose))
console.log(strings.includes('jose'))
console.log(booleans.includes(false))
