export function peopleGenerator({ email, age, phone }) {
	const _private = {
		_name: undefined,
	}

	const _public = {
		email,
		age,
		phone,
		get name() {
			return _private['_name']
		},
		set name(newName) {
			if (newName.length <= 3) {
				throw new Error('El nombre debe tener más de 3 caracteres')
			}
			_private['_name'] = newName
		},
	}

	Object.defineProperty(_public, 'name', {
		configurable: false,
	})

	// Object.defineProperty(_public, 'updateName', {
	// 	writable: false,
	// 	configurable: false,
	// })

	return _public
}
