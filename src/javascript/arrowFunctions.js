// FORMA CORRECTA

const obj = {
  value: 'my value',
  getValue() {
    return this.value
  },
}

console.log(obj.getValue()) // my value

function getFn() {}

const otherfn = () => {}

const instanceFn = new getFn()
console.log(instanceFn)
const otherInstanceFn = new otherfn()
console.log(otherInstanceFn)
