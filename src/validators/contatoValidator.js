export const contatoValidator = {
  nome: {
    required: "O campo Nome é Obrigatório",
    minLength: {
      value: 3,
      message: "Qtd mínima de caracteres não informado",
    },
    maxLength: {
      value: 250,
      message: "Qtd máxima de caracteres ultrapassada",
    },
    min: {
      value: 3,
      message: "O valor mínimo é 3",
    },
  },
  email: {
    required: "O campo email é Obrigatório",
    minLength: {
      value: 3,
      message: "Qtd mínima de caracteres não informado",
    },
    maxLength: {
      value: 250,
      message: "Qtd máxima de caracteres ultrapassada",
    },
    min: {
      value: 3,
      message: "O valor mínimo é 3",
    },
  },
};
