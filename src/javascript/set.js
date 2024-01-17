const myArray = ['Uno', 'Dos', 'Dos', 'Tres']

const uniqueList = new Set(myArray)
console.log(uniqueList)

const list = new Set()

list.add(1)
list.add(2)
list.add(1)
list.add(3)
list.add(4)

console.log(list.size)
list.clear()
console.log(list)
console.log(list.has(1))
console.log(list.delete(2))
