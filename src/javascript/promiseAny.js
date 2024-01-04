const fetch1 = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("FETCH 1")
    }, 6000)
})

const fetch2 = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("FETCH 2")
    }, 1000)
})

const fetch3 = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("FETCH 3")
    }, 4000)
})

const fetch4 = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("FETCH 4")
    }, 2000)
})

Promise.any([fetch1(), fetch2(), fetch3(), fetch4()])
    .then(response => console.log(response))
Promise.race([fetch1(), fetch2(), fetch3(), fetch4()])
    .then(response => console.log("race:", response))
    .catch(err => console.log("RACE:", err))