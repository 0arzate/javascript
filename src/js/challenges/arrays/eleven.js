// Consulta el reto aqui --> https://jshero.platzi.com/exercises/11

function solution(numbers) {
	let result
	numbers.forEach((number) => {
		if (typeof number !== 'number') {
			return console.error('Error: El valor ingresado no es un numero')
		}
		const isPar = number % 2 === 0
		if (!isPar) {
			result = false
		} else {
			result = true
		}
	})
	return result
}

console.log(solution([2, 4, 6, 8, 10]))

console.log(solution([1, 3, 5, 7, 10, 11]))

console.log(solution([1, 3, 5]))
