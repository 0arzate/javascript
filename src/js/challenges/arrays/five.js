// Consulta el reto aqui --> https://jshero.platzi.com/exercises/5

function solution(array) {
	return array.filter((delivery) => {
		if (delivery.delivered && delivery.total >= 100) {
			return delivery
		}
	})
}

console.log(
	solution([
		{
			customerName: 'Nicolas',
			total: 100,
			delivered: true,
		},
		{
			customerName: 'Zulema',
			total: 120,
			delivered: false,
		},
	])
)
