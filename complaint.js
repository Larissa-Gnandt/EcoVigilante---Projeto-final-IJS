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
}

module.exports = Complaint;
