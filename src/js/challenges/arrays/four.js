// Consulta el reto aqui --> https://jshero.platzi.com/exercises/4

function solution(array) {
	return array.filter((word) => word.length >= 4)
}

console.log(solution(['amor', 'sol', 'piedra', 'día']))
