import { embaralharElementos } from "@/functions/array"
import RespostaModel from "./resposta"

export default class QuestaoModel {
    #id: number
    #enunciado: string
    #respostas: RespostaModel[]
    #acertou: boolean

    constructor(id: number, enunciado: string, respostas: RespostaModel[], acertou: boolean = false) {
        this.#id = id
        this.#enunciado = enunciado
        this.#respostas = respostas
        this.#acertou = acertou
    }

    embaralharRespostas(): QuestaoModel {
        this.#respostas = embaralharElementos(this.#respostas)
        return new QuestaoModel(this.#id, this.#enunciado, this.#respostas, this.#acertou)
    }

    responderQuestao(indiceResposta: number): QuestaoModel {
        const acertou = this.respostas[indiceResposta]?.correta
        const respostas = this.respostas.map((resposta, i) => {
            const respostaSelecionada = indiceResposta === i
            const deveRevelar = respostaSelecionada || resposta.correta
            return deveRevelar ? resposta.revelar() : resposta
        })

        return new QuestaoModel(this.id, this.enunciado, respostas, acertou)
    }

    static objetoParaInstancia(obj: QuestaoModel) : QuestaoModel {
        const respostas = obj.respostas.map(res => RespostaModel.objetoParaInstancia(res))
        return new QuestaoModel(obj.id, obj.enunciado, respostas, obj.acertou)
    }

    paraObjeto() {
        return {
            id: this.#id,
            enunciado: this.#enunciado,
            acertou: this.#acertou,
            respondida: this.respondida,
            respostas: this.#respostas.map(respota => respota.paraObjeto()),
        }
    }

    get id() {
        return this.#id
    }

    get enunciado() {
        return this.#enunciado
    }

    get respostas() {
        return this.#respostas
    }

    get acertou() {
        return this.#acertou
    }

    get naoRespondida() {
        return !this.respondida;
    }

    get respondida() {
        for (let resposta of this.respostas) {
            if (resposta.revelada) return true
        }

        return false
    }
}