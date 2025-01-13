export default class RespostaModel {
    #id: number
    #texto: string
    #correta: boolean
    #revelada: boolean

    constructor(id: number, texto: string, correta: boolean, revelada: boolean = false) {
        this.#id = id
        this.#texto = texto
        this.#correta = correta
        this.#revelada = revelada
    }

    get id() {
        return this.#id
    }

    get texto() {
        return this.#texto
    }

    get correta() {
        return this.#correta
    }

    get revelada() {
        return this.#revelada
    }
}