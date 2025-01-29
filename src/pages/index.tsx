import Questao from "@/components/Questao";
import questoes from "./api/bancoDeQuestoes";
import { useState } from "react";

export default function Home() {
  const styleMain = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  }

  const questaoMock = questoes[1]

  const [questao, setQuestao] = useState(questaoMock)

  function funcao(indiceResposta: number) {
    setQuestao(questao.responderQuestao(indiceResposta))
    console.log(indiceResposta)
  }
  
  return (
    <div style={styleMain}>
      <Questao questao={questao} aoResponder={funcao}/>
    </div>
  );
}
