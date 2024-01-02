
const text = "I'm"

async function printValue() {
	const { VALUE } = await import("./module.js")
	console.log(`${text} ${VALUE}`)
}

printValue()