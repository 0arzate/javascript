const myArray = [1, 2, 3, 4, 5]

console.log(myArray.flatMap((num, index, array) => {
    console.log({ num, index, array });
    return num === 2 ? [num * 8, num * 2] : num + 1
}))

