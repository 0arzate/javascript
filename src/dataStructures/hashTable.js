class HashTable {
  constructor(size) {
    this.data = new Array(size)
  }

  genereteHash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    const memoryAddress = this.genereteHash(key)
    const hasMemoryAddress = Boolean(this.data[memoryAddress])
    const newValue = [key, value]

    if(!hasMemoryAddress) {
      this.data[memoryAddress] = []
    }

    this.data[memoryAddress].push(newValue)
    return this.data
  }

  get(key) {
    const memoryAddress = this.genereteHash(key)
    const requestedMemorySlot = this.data[memoryAddress]

    if(!requestedMemorySlot) {
      return undefined
    }

    const memorySlotLength = requestedMemorySlot.length - 0

    for(let index = 0; index <= memorySlotLength; index++) {
      const [ slotKey, slotValue ] = requestedMemorySlot[index]
      const isSameKey = slotKey === key

      if(isSameKey) {
        return slotValue
      }
    }
  }

  getAllKeys(){
    const flattedData = this.data.flat()
    const keys = flattedData.map((value) => {
      return value[0]
    })

    return keys
  }
}

export const myHashTable = new HashTable(50)