import styles from "@/styles/Home.module.css"
import Botao from "@/components/Botao";
import Image from "next/image";

export default function Home() {
    return (
        <div className={styles.home}>
            <Image 
                alt="imagem principal"
                src="/image.png"
                width={300}
                height={300}
                priority
            />

            <h1 className={styles.titulo}>
                Você é um gênio? Descubra!
            </h1>

            <p className={styles.subtitulo}>
                Aposto que você não acerta todas 🤣
            </p>

            <Botao texto="Iniciar o Quiz" href="/quiz" inverterCor/>
        </div>
    );
}

