import styles from "@/components/Questionario/Questionario.module.css"
import QuestaoModel from "@/model/questao"
import Questao from "../Questao"
import Botao from "../Botao"

interface QuestionarioProps {
    questao: QuestaoModel
    naUltimaPergunta: boolean
    pegarQuestaoRespondida: (questao: QuestaoModel) => void
    prosseguir: () => void
}

export default function Questionario(props: QuestionarioProps) {
    function pegarRespostaFornecida(indice: number) {
        if (props.questao.naoRespondida) {
            props.pegarQuestaoRespondida(props.questao.responderQuestao(indice))
        }
    }

    function renderizarQuestao() {
        return (
            <Questao
                questao={props.questao}
                tempoParaExibirResposta={6}
                aoResponder={pegarRespostaFornecida}
                aoEsgotarTempo={props.prosseguir}
            />
        )
    }


    return (
        <div className={styles.questionario}>
            {props.questao ? renderizarQuestao() : null}

            <Botao
                texto={props.naUltimaPergunta ? "Finalizar" : "Próxima"}
                onClick={props.prosseguir}
            />
        </div>
    )
}