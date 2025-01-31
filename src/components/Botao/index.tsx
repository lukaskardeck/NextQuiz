import Link from "next/link"

import styles from "@/components/Botao/Botao.module.css"

interface BotaoProps {
    texto: string
    inverterCor?: boolean
    href?: string
    onClick?: (e: any) => void
}

export default function Botao(props: BotaoProps) {
    const inverterCor = props.inverterCor ? styles.inverterCor : ''

    function renderizarBotao() {
        return (
            <button className={`${styles.botao} ${inverterCor}`} onClick={props.onClick}>
                {props.texto}
            </button>
        )
    }

    return props.href ? (
        <Link href={props.href}>
            {renderizarBotao()}
        </Link>
    ) : renderizarBotao()
}