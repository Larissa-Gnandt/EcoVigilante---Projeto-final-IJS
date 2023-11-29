class User {
  #name;
  #email;
  #document;
  #phone;
  #complaints;

  constructor(name, email, document, phone) {
    this.#name = name;
    this.#email = email;
    this.#document = document;
    this.#phone = phone;
    this.#complaints = [];
  }

  get name() {
    return this.#name;
  }

  set name(name) {
    this.#name = name;
  }

  get email() {
    return this.#email;
  }

  set email(email) {
    this.#email = email;
  }

  get document() {
    return this.#document;
  }

  get phone() {
    return this.#phone;
  }

  set phone(phone) {
    this.#phone = phone;
  }

  get complaints() {
    return this.#complaints;
  }

  addComplaint(complaint) {
    this.#complaints.push(complaint);
  }

  toString() {
    return `
    name: ${this.#name}
    email: ${this.#email}
    document: ${this.#document}
    phone: ${this.#phone}
    complaints: ${this.#complaints
      .map((complaint) => {
        return complaint.toString();
      })
      .join("")}
    `;
  }
}

module.exports = User;
