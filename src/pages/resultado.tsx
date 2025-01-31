import Botao from "@/components/Botao";
import Estatistica from "@/components/Estatistica";
import styles from "@/styles/Resultado.module.css"
import { useRouter } from "next/router"

export default function Resultado() {
    const router = useRouter()

    const total = +(router.query.total || 0);
    const certas = +(router.query.certas || 0);
    const percentual = Math.round((certas / total) * 100)

    return (
        <div className={styles.resultado}>
            <h1 className={styles.titulo}>Resultado final</h1>
            
            <div className={styles.estatisticas}>
                <Estatistica
                    texto="Total de perguntas"
                    valor={total}
                    corFundo="#fdd60f"
                />
                <Estatistica
                    texto="Respostas corretas"
                    valor={certas}
                    corFundo="#9cd2a4"
                />
                <Estatistica
                    texto="Percentual de acerto"
                    valor={`${percentual}%`}
                    corFundo="#de6a33"
                />
            </div>

            <Botao
                texto="Reiniciar"
                href="/quiz"
            />
        </div>
    )
}