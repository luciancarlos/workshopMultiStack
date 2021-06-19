export const ValidationService = {
  cep(cep = ""): boolean {
    return cep.replace(/\D/g, "").length === 8; //expressao regular: troca tudo que nao for numero por espaço vazio. Remove tudo que nao for numero
  },
};
