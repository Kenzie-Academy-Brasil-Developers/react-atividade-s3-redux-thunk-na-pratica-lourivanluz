import { ADD_COMENTARIO } from "./actionTypes";

export const adicionarMensagem = (mensagem) => ({
  type: ADD_COMENTARIO,
  mensagens: [mensagem],
});
