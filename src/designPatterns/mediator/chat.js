import Crypto from "crypto"

export default class Chat {
  constructor({ name }) {
    this.name = name
    this.id = Crypto.randomUUID()
    this.usersList = []
  }

  publishMessage(userId, message) {
    if(this.isUserRegister(userId)) {
      console.log(message)
    }
  }

  isUserRegister(userId) {
    return this.usersList.some(user => user.id === userId)
  }
}