import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { adicionarMensagemThunk } from "../../store/module/user/thunk";
import { DivStyled } from "./style";

export const Display = () => {
  const [mensagem, setMensage] = useState("");
  const mensagens = useSelector((state) => state.user);
  const dispath = useDispatch();

  return (
    <DivStyled>
      <ul>
        {mensagens.map((item, index) => (
          <li key={index}> {item}</li>
        ))}
      </ul>

      <input
        type="text"
        placeholder="mensagem"
        value={mensagem}
        onChange={(event) => setMensage(event.target.value)}
      />
      <button onClick={() => dispath(adicionarMensagemThunk(mensagem))}>
        enviar
      </button>
    </DivStyled>
  );
};
