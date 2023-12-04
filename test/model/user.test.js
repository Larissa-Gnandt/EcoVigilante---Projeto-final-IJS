const User = require("../../src/model/user");

describe("Teste da classe User", () => {
  let user;

  beforeEach(() => {
    user = new User("Nome", "email@gmail.com", "38235642897", "11976542343");
  });

  it("Deve criar um novo usuário com os parâmetros corretos", () => {
    expect(user.name).toBe("Nome");
    expect(user.email).toBe("email@gmail.com");
    expect(user.cpf).toBe("38235642897");
    expect(user.phone).toBe("11976542343");
  });

  it("Deve editar os campos do usuário corretamente", () => {
    user.name = "Novo Nome";
    user.email = "emailnovo@gmail.com";
    user.cpf = "38235642899";
    user.phone = "11976542344";

    expect(user.name).toBe("Novo Nome");
    expect(user.email).toBe("emailnovo@gmail.com");
    expect(user.cpf).toBe("38235642897");
    expect(user.phone).toBe("11976542344");
  });
});
