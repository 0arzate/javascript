const myFunction = () =>
  new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve('Success')
      }, 2000)
    } else {
      reject('Error')
    }
  })

const getData = async () => {
  //myFunction().then((response) => console.log({ response }))
  const response = await myFunction()
  console.log(response)
  const myOtherVar = 20
  console.log({ myOtherVar })
}

getData()
const myVar = 10
console.log(myVar)
