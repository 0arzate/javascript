export default class ChatRoom {
  constructor({ name }) {
    this.name = name
    this.usersList = new Set()
  }

  registerUser(user) {
    this.usersList.add(user)
    user.setChatRoom(this)
  }

  unRegisterUser(user) {
    this.usersList.delete(user)
  }

  sendMessage(message, receiver) {
    if(this.isRegisterUser(receiver)) {
      receiver.receiveMessage(message)
    }
  }

  isRegisterUser(user) {
    return this.usersList.has(user)
  }
}