export default class User {
  constructor({ name, userName }) {
    this.name = name
    this.userName = userName
    this.chatRoom = null
  }

  sendMessage(message, receiver) {
    if(this.hasChatRoom()) {
      this.chatRoom.sendMessage(`${this.name}: ${message}`, receiver)
    }
  }

  receiveMessage(message) {
    console.log(`Chat of ${this.name}`)
    console.log(message)
  }

  hasChatRoom() {
    if(!this.chatRoom) {
      console.log("You don´t have any chat rooms")
    }

    return this.chatRoom
  }

  setChatRoom(chatRoom) {
    this.chatRoom = chatRoom
  }
}