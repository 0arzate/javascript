const frutas = ['manzana', 'pera', 'uva', 'naranja', 'sandia', 'fresa']

const textoMultilinea = `Hola
mundo`

const NOMBRE = 'Osvaldo'

let saludo = `Hola mi nombre es ${NOMBRE}`

const esHombre = true

saludo = `Hola soy ${
	esHombre ? 'un hombre' : 'una mujer'
} mi nombre es ${NOMBRE}`

const misFrutas = `Mis frutas favoritas son ${frutas.join(', ')}`

console.log(misFrutas)
