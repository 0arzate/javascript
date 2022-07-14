class Video {
	constructor({ title, url }) {
		this.title = title
		this.url = url
	}

	play() {
		console.log(`Reproduciendo video ${this.title}`)
	}
}

class MP4 extends Video {
	constructor({ title, url }) {
		super({ title, url })
		this.format = 'mp4'
	}

	play() {
		super.play()
		console.log(`Video ${this.format}`)
	}
}

const newVideo = new MP4({
	title: 'Cancion troll',
	url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
})

newVideo.play()
