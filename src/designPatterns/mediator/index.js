import Chat from "./chat.js";
import ChatManager from "./chatManager.js";
import User from "./user.js";

const chatManager = new ChatManager();

const userOne = new User({ name: "Osvaldo" })
const userTwo = new User({ name: "Juan" })
const userThree = new User({ name: "Daniel" })
const userFour = new User({ name: "Joss" })

const chatGroup = new Chat({ name: "Chat one" })

chatGroup.usersList.push(userOne)
chatGroup.usersList.push(userTwo)
chatGroup.usersList.push(userThree)