import Link from "next/link"

import styles from "@/components/Botao/Botao.module.css"

interface BotaoProps {
    texto: string
    href?: string
    onClick?: (e: any) => void
}

export default function Botao(props: BotaoProps) {
    return (
        <Link href={props.href || ""}>
            <button className={styles.botao}>
                {props.texto}
            </button>
        </Link>
    )
}