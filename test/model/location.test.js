const Location = require("../../src/model/location");

describe("Teste da classe Location", () => {
  let location;

  beforeEach(() => {
    location = new Location(40.7128, -74.006);
  });

  it("Deve criar uma nova localização com os parâmetros corretos", () => {
    expect(location.latitude).toEqual(40.7128);
    expect(location.longitude).toEqual(-74.006);
  });

  it("Deve editar os campos de localização corretamente", () => {
    location.latitude = 41.7128;
    location.longitude = -73.006;

    expect(location.latitude).toEqual(41.7128);
    expect(location.longitude).toEqual(-73.006);
  });
});
