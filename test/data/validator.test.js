const Validator = require("../../src/data/validator");
const User = require("../../src/model/user");
const Complaint = require("../../src/model/complaint");
const Location = require("../../src/model/location");
const Course = require("../../src/model/course");

describe("Teste da classe Validator", () => {
  const validator = new Validator();

  describe("Validação do usuário", () => {
    let user;

    beforeEach(() => {
      user = new User("Nome", "email@gmail.com", "38235642897", "11976542343");
    });

    it("Deve validar se o nome foi informado", () => {
      user.name = null;

      expect(() => {
        validator.validateUser(user);
      }).toThrow(new Error("Informe um nome válido."));
    });

    it("Deve validar se o e-mail foi informado corretamente", () => {
      user.email = "email@gmail";

      expect(() => {
        validator.validateUser(user);
      }).toThrow(new Error("Informe um e-mail válido."));
    });

    it("Deve validar se o CPF foi informado corretamente", () => {
      user.cpf = "3823564";

      expect(() => {
        validator.validateUser(user);
      }).toThrow(new Error("Informe um CPF válido."));
    });

    it("Deve validar se o telefone foi informado corretamente", () => {
      user.phone = "11935";

      expect(() => {
        validator.validateUser(user);
      }).toThrow(new Error("Informe um telefone válido."));
    });

    it("Deve validar com sucesso", () => {
      expect(() => {
        validator.validateUser(user);
      }).not.toThrow();
    });
  });

  describe("Validação da denúncia", () => {
    let complaint;

    beforeEach(() => {
      complaint = new Complaint(
        "Título",
        "Descrição",
        new Location(40.7128, -74.006)
      );
    });

    it("Deve validar se o título foi informado", () => {
      complaint.title = null;

      expect(() => {
        validator.validateComplaint(complaint);
      }).toThrow(new Error("Informe um título válido."));
    });

    it("Deve validar se a descrição foi informada", () => {
      complaint.description = null;

      expect(() => {
        validator.validateComplaint(complaint);
      }).toThrow(new Error("Informe uma descrição válida."));
    });

    it("Deve validar se a localização foi informada", () => {
      complaint.location = null;

      expect(() => {
        validator.validateComplaint(complaint);
      }).toThrow(new Error("Informe uma localização válida."));
    });

    it("Deve validar com sucesso", () => {
      expect(() => {
        validator.validateComplaint(complaint);
      }).not.toThrow();
    });
  });

  describe("Validação de curso", () => {
    let course;

    beforeEach(() => {
      course = new Course("Título", "Descrição", 120);
    });

    it("Deve validar se o título foi informado", () => {
      course.title = null;

      expect(() => {
        validator.validateCourse(course);
      }).toThrow(new Error("Informe um título válido."));
    });

    it("Deve validar se a descrição foi informada", () => {
      course.description = null;

      expect(() => {
        validator.validateCourse(course);
      }).toThrow(new Error("Informe uma descrição válida."));
    });

    it("Deve validar se a duração foi informada", () => {
      course.duration = null;

      expect(() => {
        validator.validateCourse(course);
      }).toThrow(new Error("Informe uma duração válida."));
    });

    it("Deve validar se a duração é maior que zero", () => {
      course.duration = 0;

      expect(() => {
        validator.validateCourse(course);
      }).toThrow(new Error("Informe uma duração válida."));
    });

    it("Deve validar com sucesso", () => {
      expect(() => {
        validator.validateCourse(course);
      }).not.toThrow();
    });
  });
});
