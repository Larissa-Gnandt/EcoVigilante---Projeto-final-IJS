const Complaint = require("../../src/model/complaint");
const Location = require("../../src/model/location");

describe("Teste da classe Complaint", () => {
  let complaint;

  beforeEach(() => {
    complaint = new Complaint(
      "Título",
      "Descrição",
      new Location(40.7128, -74.006)
    );
  });

  it("Deve criar uma nova denúncia com os parâmetros corretos", () => {
    expect(complaint.title).toBe("Título");
    expect(complaint.description).toBe("Descrição");
    expect(complaint.location).toEqual(new Location(40.7128, -74.006));
  });

  it("Deve editar os campos da denúncia corretamente", () => {
    complaint.title = "Novo título";
    complaint.description = "Nova descrição";
    complaint.location = new Location(41.7128, -73.006);

    expect(complaint.title).toBe("Novo título");
    expect(complaint.description).toBe("Nova descrição");
    expect(complaint.location).toEqual(new Location(41.7128, -73.006));
  });
});
