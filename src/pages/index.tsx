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
  }

  function tempoEsgotado() {
    if (questao.naoRespondida) {
      setQuestao(questao.responderQuestao(-1))
    }
  }
  
  return (
    <div style={styleMain}>
      <Questao 
        questao={questao} 
        tempoParaExibirResposta={10}
        aoResponder={funcao}
        tempoEsgotado={tempoEsgotado}
      />
    </div>
  );
}
