// Consulta el reto aqui --> https://jshero.platzi.com/exercises/9

function solution(orders) {
	return orders.reduce((acc, curr) => {
		return acc + curr.total
	}, 0)
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
