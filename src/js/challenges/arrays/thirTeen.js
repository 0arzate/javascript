// Consulta el reto aqui --> https://jshero.platzi.com/exercises/13

function solution(words) {
	const position = words.findIndex((word) => word === 'myKey')

	if (position < 0) return false
	return position
}

console.log(solution(['diamonds', 'myKey', 'spades', 'AS']))
console.log(solution(['diamonds', 'hearts', 'spades']))
console.log(solution(['myKey', 'hearts', 'spades']))
