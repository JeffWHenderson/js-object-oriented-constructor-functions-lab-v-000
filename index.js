const Scooter = function(year, color, model) {
  this.year = year
  this.color = color
  this.model = model
}

const Driver = function(name, age, experience) {
  this.name = name
  this.age = age
  this.experience = experience
}

function PickupLocation(address, city) {
  this.address = address
  this.city = city
}

// Scooter with year, color, and model properties
// Driver with name, age, and experience properties
// PickupLocation with address and city properties
