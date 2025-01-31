import { useEffect, useState } from "react";
import Questionario from "@/components/Questionario";
import QuestaoModel from "@/model/questao";
import { useRouter } from "next/router";

const BASE_URL = "http://localhost:3000/api"

export default function Home() {
    const router = useRouter()

    const [idDasQuestoes, setIdDasQuestoes] = useState<number[]>([])
    const [questao, setQuestao] = useState<QuestaoModel>()
    const [qtdRespostasCertas, setQtdRespostasCertas] = useState<number>(0)

    async function carregarIdsDasQuestoes() {
        const res = await fetch(`${BASE_URL}/questionario`)
        const ids = await res.json()
        setIdDasQuestoes(ids)
    }

    async function carregarQuestao(idQuestao: number) {
        const res = await fetch(`${BASE_URL}/questao/${idQuestao}`)
        const json = await res.json()
        const novaQuestao = QuestaoModel.objetoParaInstancia(json)
        setQuestao(novaQuestao)
    }

    useEffect(() => {
        carregarIdsDasQuestoes()
    }, [])

    useEffect(() => {
        idDasQuestoes.length > 0 && carregarQuestao(idDasQuestoes[0])
    }, [idDasQuestoes])

    function pegarQuestaoRespondida(questaoRespondida: QuestaoModel) {
        setQuestao(questaoRespondida)
        if (questaoRespondida.acertou) {
            setQtdRespostasCertas(qtdRespostasCertas + 1)
        }
    }

    function pegarNumeroDaQuestaoAtual() {
        return questao ? idDasQuestoes.indexOf(questao.id) : -1
    }

    function pegarProximoId() {
        const indiceProximaQuestao = questao ? pegarNumeroDaQuestaoAtual() + 1 : -1
        return idDasQuestoes[indiceProximaQuestao]
    }

    function irParaProximaQuestao(idQuestao: number) {
        carregarQuestao(idQuestao)
    }

    function finalizar() {
        router.push({
            pathname: "/resultado",
            query: {
                total: idDasQuestoes.length,
                certas: qtdRespostasCertas
            }
        })
    }

    function prosseguir() {
        const proximaId = pegarProximoId()
        proximaId ? irParaProximaQuestao(proximaId) : finalizar()
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
            <h1>
                {pegarNumeroDaQuestaoAtual() + 1} / {idDasQuestoes.length}
            </h1>

            {
                questao ? (
                    <Questionario
                        questao={questao}
                        naUltimaPergunta={pegarProximoId() === undefined}
                        prosseguir={prosseguir}
                        pegarQuestaoRespondida={pegarQuestaoRespondida}
                    />
                ) : null
            }
        </div>
    );
}

