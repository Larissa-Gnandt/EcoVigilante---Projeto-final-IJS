const Course = require("../../src/model/course");

describe("Teste da classe Course", () => {
  let course;

  beforeEach(() => {
    course = new Course("Título", "Descrição", 60);
  });

  it("Deve criar um novo curso com os parâmetros corretos", () => {
    expect(course.title).toBe("Título");
    expect(course.description).toBe("Descrição");
    expect(course.duration).toBe(60);
  });

  it("Deve editar os campos do curso corretamente", () => {
    course.title = "Novo título";
    course.description = "Nova descrição";
    course.duration = 120;

    expect(course.title).toBe("Novo título");
    expect(course.description).toBe("Nova descrição");
    expect(course.duration).toBe(120);
  });
});
