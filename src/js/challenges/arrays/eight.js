// Consulta el reto aqui --> https://jshero.platzi.com/exercises/8

function solution(numbers) {
	return numbers.reduce((acc, curr) => {
		return acc + curr
	})
}

console.log(solution([1, 1, 1]))
console.log(solution([2, 4, 8]))
