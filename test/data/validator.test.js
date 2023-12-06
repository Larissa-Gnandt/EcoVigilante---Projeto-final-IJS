const Validator = require("../../src/data/validator");
const User = require("../../src/model/user");

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
});
