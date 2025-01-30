import styles from "@/styles/Resultado.module.css"
import { useRouter } from "next/router"

export default function Resultado() {
    const router = useRouter()

    const total = +(router.query.total || 0);
    const certas = +(router.query.certas || 0);
    const percentual = Math.round((certas/total) * 100)

    return (
        <div>
            <h1>Resultado final</h1>
            <span>total: {total}</span>
            <span>certas: {certas}</span>
            <span>percentual: {percentual}</span>
        </div>
    )
}