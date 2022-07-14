// Consulta el reto aqui --> https://jshero.platzi.com/exercises/6

function solution(string, query) {
	return string.toLowerCase().includes(query.toLowerCase())
}

console.log(solution('Ana lava la tina', 'ana'))
console.log(solution('Santiago', 'tiago'))
console.log(solution('Nicolas', 'ana'))
