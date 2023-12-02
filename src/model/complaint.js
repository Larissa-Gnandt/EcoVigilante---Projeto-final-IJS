class Complaint {
  #title;
  #description;
  #location;

  constructor(title, description, location) {
    this.#title = title;
    this.#description = description;
    this.#location = location;
  }

  get title() {
    return this.#title;
  }

  set title(title) {
    this.#title = title;
  }

  get description() {
    return this.#description;
  }

  set description(description) {
    this.#description = description;
  }

  get location() {
    return this.#location;
  }

  set location(location) {
    this.#location = location;
  }

  toString() {
    return `
    - title: ${this.#title}
      description: ${this.#description}
      latitude: ${this.#location.latitude}
      longitude: ${this.#location.longitude}
    `;
  }
}

module.exports = Complaint;
