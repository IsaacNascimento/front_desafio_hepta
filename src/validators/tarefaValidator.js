export const tarefaValidator = {
  titulo: {
    required: "O campo Titulo é Obrigatório",
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
  descricao: {
    required: "O campo Descrição é Obrigatório",
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
