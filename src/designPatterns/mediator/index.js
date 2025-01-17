import ChatRoom from "./chatRoom.js";
import ChatManager from "./chatManager.js";
import User from "./user.js";

const chatManager = new ChatManager();

const userOne = new User({ name: "Osvaldo", userName: "Oarzate" })
const userTwo = new User({ name: "Juan", userName: "JuanDc" })
const userThree = new User({ name: "Daniel", userName: "DanR" })
const userFour = new User({ name: "Joss", userName: "Josa" })

const chatGroup = new ChatRoom({ name: "Chat one" })

chatGroup.registerUser(userOne)
chatGroup.registerUser(userTwo)
chatGroup.registerUser(userThree)

userOne.sendMessage("Hola amigo", userTwo)
userTwo.sendMessage("Hola, como estas?", userOne)