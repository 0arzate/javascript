import { myHashTable } from "./src/dataStructures/hashTable.js";

myHashTable.set("Osvaldo", { age: 26, lastName: "Arzate Santiago", name: "Osvaldo" })
myHashTable.set("Josabeth", { age: 29, lastName: "Nava Hernandez", name: "Josabeth" })
myHashTable.set("Daniel", { age: 28, lastName: "Santiago Rodriguez", name: "Daniel" })

console.log("myHashTable:", myHashTable)
myHashTable.getAllKeys()
