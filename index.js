import { MySinglyLinkedList } from "./src/dataStructures/singlyLinkedList.js";


const singlyLinkedList = new MySinglyLinkedList(1)
singlyLinkedList.append(2)
singlyLinkedList.append(3)
singlyLinkedList.insert(0, 4)
console.log(singlyLinkedList)