const str = 'Hola mundo'

// indexOf(text)

console.log('indexOf: ' + str.indexOf('mundo'))
console.log('includes: ' + str.includes('mun'))
console.log('slice: ' + str.slice(1, 4))
console.log('substring: ' + Boolean(str.substr(11, 11)))
console.log('charAt: ' + str.charAt(5))
console.log('repeat: ' + str.repeat(2))
console.log('split: ' + str.split(' '))
console.log('startsWith: ' + str.startsWith('Hola'))
console.log('endsWith: ' + str.endsWith('ndo'))
console.log('search: ' + str.search('dos'))
console.log('toLowerCase: ' + str.toLowerCase())
console.log('toUpperCase: ' + str.toUpperCase())
console.log('replace: ' + str.replace('Hola', 'Adios'))

const str2 = ' Hola mundo '
console.log('trim: ' + str2.trim())
