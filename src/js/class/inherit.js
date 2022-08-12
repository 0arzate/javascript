'use-strict'

class Base {
  constructor(){
    console.log("Base constructor")
  }
}

class Derivada extends Base {
  constructor(){
    super()
    console.log("Derivada constructor")
  }
}

class OtraDerivada extends Derivada {
  constructor(){
    super()
    console.log("OtraDerivada constructor")
  }
}

let mascatoas = ["Mascatoa 1", "Mascatoa 2", "Mascatoa 3", "Masctoa 4"]
mascatoas.filter(mascota => mascota.length >= 5)

mascatoas[mascatoas.length] = "Mascatoa 5"

const instancia = new OtraDerivada()
console.log(isNaN('20'))