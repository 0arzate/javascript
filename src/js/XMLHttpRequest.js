const http = new XMLHttpRequest()
const URL = 'https://rickandmortyapi.com/api/character'

const getCharacters = (error, data) => {
	console.log({ data })
}

const request = ({ url, method, callback }) => {
	http.open(method, url, true)

	http.onreadystatechange = function (event) {
		if (event.target.readyState === 4) {
			if (event.target.status === 200) {
				const data = JSON.parse(event.target.response)
				callback(null, data)
			}
		}
	}
	http.send()
}

request({ url: URL, method: 'GET', callback: getCharacters })
