class Location {
  #latitude;
  #longitude;

  constructor(latitude, longitude) {
    this.#latitude = latitude;
    this.#longitude = longitude;
  }

  get latitude() {
    return this.#latitude;
  }

  set latitude(latitude) {
    this.#latitude = latitude;
  }

  get longitude() {
    return this.#longitude;
  }

  set longitude(longitude) {
    this.#latitude = longitude;
  }
}

module.exports = Location;
