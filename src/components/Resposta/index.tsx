import styles from "@/components/Resposta/Resposta.module.css"
import RespostaModel from "@/model/resposta"

interface RespostaProps {
    resposta: RespostaModel
    indice: number
    letra: string
    corFundoLetra: string
    aoResponder: (indiceResposta: number) => void
}

export default function Resposta(props: RespostaProps) {
    const resposta = props.resposta
    return (
        <div className={styles.resposta} onClick={() => props.aoResponder(props.indice)}>
            <div className={styles.conteudoResposta}>

                {!resposta.revelada ? (
                    <div className={styles.frente}>
                        <div className={styles.letra} style={{ backgroundColor: props.corFundoLetra }}>
                            {props.letra}
                        </div>
                        <div className={styles.texto}>
                            {resposta.texto}
                        </div>
                    </div>
                ) : (
                    <div className={styles.verso}>
                        {resposta.correta ? (
                            <div className={styles.certa}>
                                <div>A resposta certa é....</div>
                                <div className={styles.texto}>
                                    {resposta.texto}
                                </div>
                            </div>
                        ) : (
                            <div className={styles.errada}>
                                <div>Afirmativa Incorreta</div>
                                <div className={styles.texto}>
                                    {resposta.texto}
                                </div>
                            </div>
                        )}
                    </div>
                )}


            </div>
        </div>
    )
}