// Side effects
function initUserSession(userName) {
	console.log("SUCCESS LOGIN");
}

function getUserData(userName) {
	return {
		userName: "osvarz",
		password: "12345"
	}
}

function checkPassword(userName, password) {
	const userData = getUserData(userName)

	if(userData === null) return false

	const userPassword = userData.password

	if(userPassword === password) {
		initUserSession()
		return true
	}
}