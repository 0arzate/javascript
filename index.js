import { MySinglyLinkedList } from "./src/dataStructures/singlyLinkedList.js";


const singlyLinkedList = new MySinglyLinkedList(1)
singlyLinkedList.append(2)
singlyLinkedList.append(3)
singlyLinkedList.prepend(0)
console.log(singlyLinkedList)