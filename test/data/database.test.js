const Database = require("../../src/data/database");
const Validator = require("../../src/data/validator");
const Complaint = require("../../src/model/complaint");
const Course = require("../../src/model/course");
const Location = require("../../src/model/location");
const User = require("../../src/model/user");

describe("Teste da classe Database", () => {
  const validator = new Validator();
  let database;

  beforeEach(() => {
    database = new Database(validator);
  });

  it("Deve acrescentar ao array o usuário com dados válidos", () => {
    validator.validateUser = jest.fn(() => true);
    const user = new User(
      "Nome",
      "email@gmail.com",
      "38235642897",
      "11976542343"
    );

    database.createUser(
      "Nome",
      "email@gmail.com",
      "38235642897",
      "11976542343"
    );

    expect(database.users.length).toBe(1);
    expect(database.users[0]).toEqual(user);
  });

  it("Não deve acrescentar ao array um usuário inválido", () => {
    validator.validateUser = jest.fn(() => false);

    database.createUser(
      "Nome",
      "email@gmail.com",
      "38235642897",
      "11976542343"
    );

    expect(database.users.length).toBe(0);
  });

  it("Deve acrescentar ao array a denúncia com dados válidos", () => {
    validator.validateComplaint = jest.fn(() => true);
    const complaint = new Complaint(
      "Título",
      "Descrição",
      new Location(40.7128, -74.006)
    );

    database.createComplaint(
      "Título",
      "Descrição",
      new Location(40.7128, -74.006)
    );

    expect(database.complaints.length).toBe(1);
    expect(database.complaints[0]).toEqual(complaint);
  });

  it("Não deve acrescentar ao array uma denúncia inválida", () => {
    validator.validateComplaint = jest.fn(() => false);

    database.createComplaint(
      "Título",
      "Descrição",
      new Location(40.7128, -74.006)
    );

    expect(database.complaints.length).toBe(0);
  });

  it("Deve acrescentar ao array o curso com dados válidos", () => {
    validator.validateCourse = jest.fn(() => true);
    const course = new Course("Título", "Descrição", 60);

    database.createCourses("Título", "Descrição", 60);

    expect(database.courses.length).toBe(1);
    expect(database.courses[0]).toEqual(course);
  });

  it("Não deve acrescentar ao array um curso inválido", () => {
    validator.validateCourse = jest.fn(() => false);

    database.createCourses("Título", "Descrição", 60);

    expect(database.courses.length).toBe(0);
  });
});
