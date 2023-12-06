const Database = require("./data/database");
const Validator = require("./data/validator");

const database = new Database(new Validator());

const user = database.createUser(
  "Larissa",
  "larissa@gmail.com",
  "42345678902",
  "11978675433"
);
const complaint = database.createComplaint(
  "Título",
  "Descrição",
  49.03131,
  -52.324123
);
user.addComplaint(complaint);
