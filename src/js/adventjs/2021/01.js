const ovejas = [
	{ name: 'Noa', color: 'azul' },
	{ name: 'Euge', color: 'rojo' },
	{ name: 'Navidad', color: 'rojo' },
	{ name: 'Ki Na Ma', color: 'rojo' },
	{ name: 'AAAAAaaaaa', color: 'rojo' },
	{ name: 'Nnnnnnnn', color: 'rojo' },
]

function contarOvejas(ovejas) {
	const ovejasRojas = ovejas.filter((oveja) => oveja.color === 'rojo')
	const ovejasWithN = ovejasRojas.filter(
		(oveja) =>
			oveja.name.toLowerCase().includes('n') &&
			oveja.name.toLowerCase().includes('a')
	)
	return ovejasWithN
}

console.log(contarOvejas(ovejas))
