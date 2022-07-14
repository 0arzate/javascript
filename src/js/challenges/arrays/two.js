// Consulta el reto aqui --> https://jshero.platzi.com/exercises/2

const solution = (array) => array.map((person) => person.name)

console.log(
	solution([
		{
			name: 'Nicolas',
			lastName: 'Molina',
			age: 28,
		},
		{
			name: 'Valentina',
			lastName: 'Molina',
			age: 19,
		},
	])
)
