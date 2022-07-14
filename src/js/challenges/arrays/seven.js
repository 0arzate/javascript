// Consulta el reto aqui --> https://jshero.platzi.com/exercises/7

function solution(words, query) {
	return words.filter((word) =>
		word.toLowerCase().includes(query.toLowerCase())
	)
}

console.log(solution(['ana', 'santi', 'nico', 'anastasia'], 'an'))
console.log(solution(['ana', 'santi', 'nico', 'anastasia'], 'xyz'))
