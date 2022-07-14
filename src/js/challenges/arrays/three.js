// Consulta el reto aqui --> https://jshero.platzi.com/exercises/3

const solution = (array) =>
	array.map((product) => {
		return {
			...product,
			taxes: product.price * 0.19,
		}
	})

console.log(
	solution([
		{
			name: 'Product 1',
			price: 1000,
			stock: 10,
		},
		{
			name: 'Product 2',
			price: 2000,
			stock: 20,
		},
	])
)
