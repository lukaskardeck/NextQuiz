import styles from "@/components/Temporizador/Temporizador.module.css"
import { CountdownCircleTimer } from "react-countdown-circle-timer"

interface TemporizadorProps {
    duracao: number
    tempoEsgotado: () => void
}

export default function Temporizador(props: TemporizadorProps) {
    const intervalosDeTempo: [number, number, ...number[]] = [
        props.duracao, 
        props.duracao * 0.66, 
        props.duracao * 0.33, 
        0
    ];
    
    return (
        <div className={styles.temporizador}>
            <CountdownCircleTimer
                duration={props.duracao}
                size={120}
                isPlaying
                onComplete={props.tempoEsgotado}
                colors={['#bce596', '#f7b801', '#ed827a', '#ed827a']}
                colorsTime={intervalosDeTempo}
            >

                {({ remainingTime }) => remainingTime}

            </CountdownCircleTimer>
        </div>
    )
}