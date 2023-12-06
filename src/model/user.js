class User {
  #name;
  #email;
  #cpf;
  #phone;
  #complaints;

  constructor(name, email, cpf, phone) {
    this.#name = name;
    this.#email = email;
    this.#cpf = cpf;
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

  get cpf() {
    return this.#cpf;
  }

  set cpf(cpf) {
    this.#cpf = cpf;
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
}

module.exports = User;
