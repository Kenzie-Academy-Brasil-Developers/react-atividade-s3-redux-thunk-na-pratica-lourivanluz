import { ADD_COMENTARIO } from "./actionTypes";
const userReduce = (state = [], action) => {
  switch (action.type) {
    case ADD_COMENTARIO:
      const { mensagens } = action;

      return [...state, mensagens];
    default:
      return state;
  }
};

export default userReduce;
