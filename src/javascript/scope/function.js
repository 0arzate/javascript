function sayName() {
  var userName = 'Osvaldo'

  if (userName !== null) {
    console.log(userName)
  }
}

sayName() // Osvaldo
console.log(userName) // Error la variable no existe en el contexto
