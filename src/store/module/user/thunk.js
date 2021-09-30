import { adicionarMensagem } from "./action";

export const adicionarMensagemThunk = (mensagem) => (dispath, getStore) => {
  const { user } = getStore();
  const mensagemNova = [mensagem];

  dispath(adicionarMensagem(mensagemNova));
};
