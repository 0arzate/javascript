function Animal({ name, age, type, color }) {
	this.age = age
	this.type = type
	this.color = color

	const _private = {
		_name: name,
	}

	Object.defineProperty(this, 'name', {
		get() {
			return _private._name
		},
		set(newName) {
			_private._name = newName
		},
	})
}

const kuma = new Animal({ name: 'Kuma', age: 5, type: 'dog', color: 'gray' })

console.log({
	kuma,
	isAnimal: kuma instanceof Animal,
	name: kuma.name,
	entries: Object.entries(kuma),
})
