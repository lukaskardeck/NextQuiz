import QuestaoModel from "@/model/questao"
import Enunciado from "../Enunciado"
import styles from "@/components/Questao/Questao.module.css"
import Resposta from "../Resposta"

interface QuestaoProps {
    questao: QuestaoModel
    aoResponder: (indiceResposta: number) => void
}

export default function Questao(props: QuestaoProps) {
    const questao = props.questao

    function renderizarRespostas() {
        const letras = [
            { valor: "A", cor: "#ff9934" },
            { valor: "B", cor: "#ff3366" },
            { valor: "C", cor: "#00c9d2" },
            { valor: "D", cor: "#beee3b" },
        ]
        return questao.respostas.map((resposta, i) => {
            return <Resposta
                key={i}
                resposta={resposta}
                indice={i}
                letra={letras[i].valor}
                corFundoLetra={letras[i].cor}
                aoResponder={props.aoResponder}
            />
        })
    }

    return (
        <div className={styles.questao}>
            <Enunciado texto={questao.enunciado} />
            <div className={styles.respostas}>
                {renderizarRespostas()}
            </div>
        </div>
    )
}