const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const cpfRegex =
  /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/;
const phoneRegex =
  /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/;

class Validator {
  validateUser(user) {
    if (!user.name) {
      throw new Error("Informe um nome válido.");
    }

    if (!emailRegex.test(user.email)) {
      throw new Error("Informe um e-mail válido.");
    }

    if (!cpfRegex.test(user.cpf)) {
      throw new Error("Informe um CPF válido.");
    }

    if (!phoneRegex.test(user.phone)) {
      throw new Error("Informe um telefone válido.");
    }
    return true;
  }

  validateComplaint(complaint) {
    if (!complaint.title) {
      throw new Error("Informe um título válido.");
    }

    if (!complaint.description) {
      throw new Error("Informe uma descrição válida.");
    }

    if (!complaint.location) {
      throw new Error("Informe uma localização válida.");
    }
    return true;
  }

  validateCourse(course) {
    if (!course.title) {
      throw new Error("Informe um título válido.");
    }

    if (!course.description) {
      throw new Error("Informe uma descrição válida.");
    }

    if (!course.duration || course.duration <= 0) {
      throw new Error("Informe uma duração válida.");
    }

    return true;
  }
}
