var pet
let name

console.log(pet, name) // undefined undefined

name = 'Jose'
pet = 'Dog'

console.log(pet, name) // Jose Dog

var lastName = 'Jose'

console.log(lastName)

var lastName = 'Perez'

console.log(lastName)

const arr = ['🍎', '🍌', '🍍']

console.log(arr)

arr.forEach((element, i) => (arr[i] = element + 'fruit'))

console.log(arr)
