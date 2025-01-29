import Questao from "@/components/Questao";
import questoes from "./api/bancoDeQuestoes";
import { useState } from "react";
import Botao from "@/components/Botao";

export default function Home() {
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
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      gap: "24px"
    }}>
      <Questao 
        questao={questao} 
        tempoParaExibirResposta={10}
        aoResponder={funcao}
        tempoEsgotado={tempoEsgotado}
      />

      <Botao texto="Olá, mundo!"/>
    </div>
  );
}
