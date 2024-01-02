const string = "Hola mundo, ¿como estan?. Yo estoy bien."
const regex = /[A-Z]/g

console.log([...string.matchAll(regex)])