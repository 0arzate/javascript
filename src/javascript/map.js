// OBJETO

const myObj = {
  function: 'Hola mundo',
}

console.log(myObj)

// MAP

function fnThis() {
  this.lastName = 'Arzate Santiago'
}

const map = new Map()

map.set(0, 'Jose')
map.set(1, 'Pedro')
map.set(2, 'Osvaldo')

map.clear()

console.log(map.size)

map.forEach((value, key, map) => {
  console.log({ value, key, map })
})

const mapped = map.values()

console.log(mapped.next())
console.log(mapped.next())
