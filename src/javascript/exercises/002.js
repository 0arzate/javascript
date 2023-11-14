export function simulador(astronaut, spaceShip, direction) {
  astronaut.navigate(spaceShip, direction)
  return spaceShip._movements
}

export class Astronaut {
  #_spaceShipKey
  constructor({ name }) {
    this.name = name
    this.#_spaceShipKey = undefined
  }

  setAccessKey(accessKey) {
    this.#_spaceShipKey = accessKey
  }

  navigate(spaceShip, direction) {
    spaceShip.navigator(direction, { accessKey: this.#_spaceShipKey })
  }
}

export class SpaceShip {
  #_key

  constructor({ key }) {
    this.#_key = key
    this._movements = []
  }

  getAccessKey(astronaut) {
    const isAstronaut = astronaut instanceof Astronaut

    if (isAstronaut) {
      astronaut.setAccessKey(this.#_key)
    }
  }

  navigator(direction, { accessKey }) {
    if (this.#_key == accessKey) {
      this._movements.push(direction)
    } else {
      this._movements.push('Incorrect Access Key')
    }
  }
}

//const rocket99 = new SpaceShip({ key: '__LLAVE_DE_ACCESO__' })
//const capitandc = new Astronaut({ name: 'Capitán DC' })
//rocket99.getAccessKey(capitandc)
//capitandc.navigate(rocket99, 'left')
//
//console.log(rocket99._movements)

const rocket99 = new SpaceShip({ key: '__LLAVE_DE_ACCESO__' })
const capitandc = new Astronaut({ name: 'Capitán DC' })
rocket99.getAccessKey(capitandc)

const comandanteJuanita = new Astronaut({ name: 'Comandante Juanita' })
comandanteJuanita._spaceShipKey = capitandc._spaceShipKey
comandanteJuanita.navigate(rocket99, 'right')

console.log(rocket99._movements)
