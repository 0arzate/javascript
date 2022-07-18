// Consulta el reto aqui --> https://jshero.platzi.com/exercises/12

function solution(cards) {
	const hasAs = cards.find((card) => card === 'AS')

	if (!hasAs) return false
	return hasAs
}

console.log(solution(['diamonds', 'hearts', 'spades', 'AS']))
console.log(solution(['diamonds', 'hearts', 'spades']))
