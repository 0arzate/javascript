const getCharacters = () => {
  return fetch('https://rickandmortyapi.com/api/character')
}

getCharacters().then((response) => {
  response
    .json()
    .then((data) => console.log('PROMISE COMPLETED', data.results[0].name))
    .catch((error) => console.error(error))
    .finally(() => console.log('PROMISE FINALLY'))
})
