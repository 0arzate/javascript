import Crypto from "crypto"

export default class User {
  constructor({ name }) {
    this.name = name
    this.id = Crypto.randomUUID()
  }
}