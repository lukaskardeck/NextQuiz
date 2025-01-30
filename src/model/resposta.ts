export default class RespostaModel {
    #texto: string
    #correta: boolean
    #revelada: boolean

    constructor(texto: string, correta: boolean, revelada: boolean = false) {
        this.#texto = texto
        this.#correta = correta
        this.#revelada = revelada
    }

    static verdadeira(texto: string) {
        return new RespostaModel(texto, true)
    }

    static falsa(texto: string) {
        return new RespostaModel(texto, false)
    }

    revelar() {
        return new RespostaModel(this.#texto, this.#correta, true)
    }

    static objetoParaInstancia(obj: RespostaModel) : RespostaModel {
        return new RespostaModel(obj.texto, obj.correta, obj.revelada)
    }

    paraObjeto() {
        return {
            texto: this.#texto,
            correta: this.#correta,
            revelada: this.#revelada,
        }
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