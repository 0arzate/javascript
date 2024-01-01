// FOR

const myArray = [10, 20, 30, 40]

async function getNumbers() {
  for await (const value of myArray) {
    console.log(value)
  }
}

getNumbers()

console.log('MAIN THREAD CONTINUES')

// GENERATORS

const API_URL = 'https://rickandmortyapi.com/api/character'

async function* getCharacters() {
  yield (await fetch(`${API_URL}/1`)).json()
  yield (await fetch(`${API_URL}/2`)).json()
  yield (await fetch(`${API_URL}/3`)).json()
  yield (await fetch(`${API_URL}/4`)).json()
}

const characters = getCharacters()

characters.next().then((response) => console.log(response.value.name))
characters.next().then((response) => console.log(response.value.name))
characters.next().then((response) => console.log(response.value.name))

console.log('MAIN THREAD CONTINUES')
