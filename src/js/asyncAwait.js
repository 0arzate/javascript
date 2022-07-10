const http = new XMLHttpRequest()
const URL = 'https://rickandmortyapi.com/api/character'

const request = ({ url, method }) =>
	new Promise((resolve, reject) => {
		http.open(method, url, true)
		http.onreadystatechange = (event) => {
			if (event.target.readyState === 4) {
				if (event.target.status === 200) {
					resolve(JSON.parse(event.target.response))
				} else {
					reject(`Error: ${event.target.status}`)
				}
			}
		}
		http.send()
	})

const getCharacters = async () => {
	try {
		const response = await request({ url: URL, method: 'GET' })
		console.log(response)
	} catch (error) {
		console.error(error)
	}
}

getCharacters()
