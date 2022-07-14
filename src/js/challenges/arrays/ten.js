// Consulta el reto aqui --> https://jshero.platzi.com/exercises/10

function solution(numbers) {
	const havePar = numbers.find((number) => number % 2 === 0)
	return Boolean(havePar)
}

console.log(solution([1, 3, 5, 7, 10, 11]))

console.log(solution([1, 3, 5]))
