import styles from "@/components/Enunciado/Enunciado.module.css"

interface EnunciadoProps {
    texto: String
}

export default function Enunciado(props: EnunciadoProps) {
    const texto = props.texto
    return (
        <div className={styles.enunciado}>
            <span className={styles.texto}>{texto}</span>
        </div>
    )
}