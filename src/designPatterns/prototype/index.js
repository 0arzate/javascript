const house = {
  type: "house",
  color: "",

  openDoor() {
    console.log(`${this.type} open door`)
  }
};

const apartment = Object.create(house)
apartment.type = "apartment"
apartment.openDoor();