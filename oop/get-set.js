const data = {
  locations: [],
  get location() {
    return this._location
  },
  set location(value) {
    this._location = value.trim()
    this.locations.push(this._location)
    return this._location
  }
}

data.location = '  ny '
data.location = '   boston '
// console.log(data);
console.log(data.location);
console.log(data.locations);
