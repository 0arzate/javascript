// BAD CODE

let attributes = {
	name: "",
	lastName: "Arzate"
};

function setAttribute(name, value) {
	if(!attributes[name]) return false

  attributes[name] = value
	return true
}

if(setAttribute("name", "Juan")) {
	// code ...
}

// GOOD CODE

let userData = {
	name: "",
	lastName: ""
}

function existUserAttribute(name) {
	const userDataKeys = Object.keys(userData)
	return userDataKeys.includes(name)
}

if(existUserAttribute("age")) {
	userData.name = "Osvaldo"
}

console.log(userData)