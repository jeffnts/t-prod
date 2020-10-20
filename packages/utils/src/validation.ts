export const validation = {
  required: {
    required: "Campo obrigatório!",
  },
  email: {
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      message: "Email inválido",
    },
  },
}
