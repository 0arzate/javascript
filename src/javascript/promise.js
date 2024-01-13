const getCharacters = async () => {
  const response = await fetch('https://rickandmortyapi.com/api/character/1')
  const characters = await response.json()
  return characters
}

console.log('START')

getCharacters().then((characters) => console.log(characters))

console.log('END')
