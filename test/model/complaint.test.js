const Complaint = require("../../src/model/complaint");

describe("Teste da classe Complaint", () => {
  let complaint;

  beforeEach(() => {
    complaint = new Complaint("Título", "Descrição", {
      latitude: 40.7128,
      longitude: -74.006,
    });
  });

  it("Deve criar uma nova denúncia com os parâmetros corretos", () => {
    expect(complaint.title).toBe("Título");
    expect(complaint.description).toBe("Descrição");
    expect(complaint.location).toEqual({
      latitude: 40.7128,
      longitude: -74.006,
    });
  });

  it("Deve editar os campos da denúncia corretamente", () => {
    complaint.title = "Novo título";
    complaint.description = "Nova descrição";
    complaint.location = {
      latitude: 41.7128,
      longitude: -73.006,
    };

    expect(complaint.title).toBe("Novo título");
    expect(complaint.description).toBe("Nova descrição");
    expect(complaint.location).toEqual({
      latitude: 41.7128,
      longitude: -73.006,
    });
  });
});
