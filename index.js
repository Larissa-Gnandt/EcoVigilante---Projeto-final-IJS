const Database = require("./database");
const User = require("./user");
const Complaint = require("./complaint");
const Location = require("./location");

const database = new Database();

const user = database.createUser("nome", "email", "cpf", "telefone");
const complaint = database.createComplaint(
  "titulo",
  "descricao",
  new Location(-49.03131, -52.324123)
);

user.addComplaint(complaint);

console.log(JSON.stringify(user, null, 2));

complaint.title = "novo titulo";
console.log(JSON.stringify(user, null, 2));
