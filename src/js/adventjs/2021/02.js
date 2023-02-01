const carta = 'bici coche balón _playstation bici coche peluche'

function listGifts(letter) {
	let list = {}
	const gifts = letter.split(' ')
	const removeGifts = gifts.filter((gift) => !gift.includes('_'))
	for (let value in removeGifts) {
		list = {
			...list,
			[removeGifts[value]]: removeGifts.filter(
				(gift) => gift === removeGifts[value]
			).length,
		}
	}
	return list
}

console.log(listGifts(carta))
