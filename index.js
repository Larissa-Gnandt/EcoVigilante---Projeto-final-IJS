const Database = require("./database");

const database = new Database();

const user = database.createUser("nome", "email", "cpf", "telefone");
const complaint = database.createComplaint(
  "titulo",
  "descricao",
  49.03131,
  -52.324123
);

user.addComplaint(complaint);

console.log(user.toString());

complaint.title = "novo titulo";
console.log(user.toString());
