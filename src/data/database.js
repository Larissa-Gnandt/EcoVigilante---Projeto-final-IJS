const User = require("../model/user");
const Complaint = require("../model/complaint");
const Location = require("../model/location");

class Database {
  #users;
  #complaints;

  constructor() {
    this.#users = [];
    this.#complaints = [];
  }

  get users() {
    return this.#users;
  }

  get complaints() {
    return this.#complaints;
  }

  createUser(name, email, document, phone) {
    const user = new User(name, email, document, phone);
    this.#users.push(user);
    return user;
  }

  createComplaint(title, description, latitude, longitude) {
    const complaint = new Complaint(
      title,
      description,
      new Location(latitude, longitude)
    );
    this.#complaints.push(complaint);
    return complaint;
  }
}

module.exports = Database;
