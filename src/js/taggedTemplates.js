const multiplication = (strings, ...numbers) =>
	strings.map((string, idx) => string + numbers[idx] * 2).join(' ')

const myNumbers = multiplication`Numero ${1}, numero ${3}, numero ${8}`

console.log(myNumbers)
