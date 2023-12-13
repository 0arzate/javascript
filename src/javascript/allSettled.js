const promise1 = () => new Promise((resolve, reject) => {
    reject("Promise 1 rejected")
})

const promise2 = () => new Promise((resolve, reject) => {
    resolve("Promise 2 resolve")
})

const promise3 = () => new Promise((resolve, reject) => {
    resolve("Promise 3 resolve")
})

const promise4 = () => new Promise((resolve, reject) => {
    reject("Promise 4 rejected")
})

const responses = await Promise.allSettled([promise1(), promise2(), promise3(), promise4()])

