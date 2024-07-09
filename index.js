import { MySinglyLinkedList } from "./src/dataStructures/singlyLinkedList.js";


const singlyLinkedList = new MySinglyLinkedList(1)
singlyLinkedList.append(2)
singlyLinkedList.append(3)
singlyLinkedList.delete(1)
console.log(singlyLinkedList)