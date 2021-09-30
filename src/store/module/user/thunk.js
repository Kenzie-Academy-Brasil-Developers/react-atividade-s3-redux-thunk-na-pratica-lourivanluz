import { adicionarMensagem } from "./action";

export const adicionarMensagemThunk = (mensagem) => (dispath, getStore) => {
  const { user } = getStore();
  const mensagemNova = [mensagem + "foi alterada"];

  dispath(adicionarMensagem(mensagemNova));
};
