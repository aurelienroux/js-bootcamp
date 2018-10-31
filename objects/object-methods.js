let restaurant = {
  guestCapacity: 75,
  actualGuests: 0,
  
  checkAvailability: function(partySize) {
    let seatsLeft = this.guestCapacity - this.actualGuests
    return seatsLeft >= partySize
  },
  
  seatParty: function(partySize) {
    this.actualGuests += partySize
  },
  
  removeParty: function(partySize) {
    this.actualGuests -= partySize
  },
}

restaurant.seatParty(72)
console.log(restaurant.checkAvailability(4))
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4))