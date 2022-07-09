const sayHi = (callback) => {
	console.log('Hello')
	setTimeout(() => {
		callback()
	}, 5000)
}

sayHi(() => console.log('Termino el saludo'))
