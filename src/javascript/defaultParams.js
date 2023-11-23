const fn = (name, lastname) => {
  return `Hi my name is ${name} ${lastname || ''}`
}

console.log(fn('Osvaldo'))

const newFn = (name, lastname = '') => {
  return `Hi my names is ${name} ${lastname}`
}

console.log(newFn('Osvaldo'))
