const array = ["A", "B", "C", "D"]

const obj = {
  name: "Osvaldo"
}

array.forEach(function(element, index, array) {
  console.log({ element, index, array }, "this:", this)
}, obj)