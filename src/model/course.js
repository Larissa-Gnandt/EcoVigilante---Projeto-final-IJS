class Course {
  #title;
  #description;
  #duration;

  constructor(title, description, duration) {
    this.#title = title;
    this.#description = description;
    this.#duration = duration;
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

  get duration() {
    return this.#duration;
  }

  set duration(duration) {
    this.#duration = duration;
  }
}

module.exports = Course;
