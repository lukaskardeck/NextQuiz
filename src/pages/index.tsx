import Questao from "@/components/Questao";
import questoes from "./api/bancoDeQuestoes";

export default function Home() {
  const styleMain = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  }

  const questao = questoes[1]

  function funcao(indiceResposta: number) {
    console.log(indiceResposta)
  }
  
  return (
    <div style={styleMain}>
      <Questao questao={questao} aoResponder={funcao}/>
    </div>
  );
}
