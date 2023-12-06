const User = require("../model/user");
const Complaint = require("../model/complaint");
const Location = require("../model/location");
const Course = require("../model/course");

class Database {
  #users;
  #complaints;
  #courses;
  #validator;

  constructor(validator) {
    this.#users = [];
    this.#complaints = [];
    this.#courses = [];
    this.#validator = validator;
  }

  get users() {
    return this.#users;
  }

  get complaints() {
    return this.#complaints;
  }

  get courses() {
    return this.#courses;
  }

  createUser(name, email, document, phone) {
    const user = new User(name, email, document, phone);
    if (this.#validator.validateUser(user)) {
      this.#users.push(user);
      return user;
    }
  }

  createComplaint(title, description, latitude, longitude) {
    const complaint = new Complaint(
      title,
      description,
      new Location(latitude, longitude)
    );
    if (this.#validator.validateComplaint(complaint)) {
      this.#complaints.push(complaint);
      return complaint;
    }
  }

  createCourses(title, description, duration) {
    const course = new Course(title, description, duration);
    if (this.#validator.validateCourse(course)) {
      this.#courses.push(course);
      return course;
    }
  }
}

module.exports = Database;
