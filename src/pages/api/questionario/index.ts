import type { NextApiRequest, NextApiResponse } from "next";
import questoes from "../bancoDeQuestoes";
import { embaralharElementos } from "@/functions/array";

export default function questionario(req: NextApiRequest, res: NextApiResponse) {
    const idQuestoes = questoes.map(questao => questao.id)
    const idQuestoesSorteadas = embaralharElementos(idQuestoes)

    res.status(200).json(idQuestoesSorteadas)
}