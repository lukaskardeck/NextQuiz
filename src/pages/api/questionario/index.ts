import type { NextApiRequest, NextApiResponse } from "next";
import questoes from "../bancoDeQuestoes";

export default function questionario(req: NextApiRequest, res: NextApiResponse) {
    const idQuestoes = questoes.map(questao => questao.id)
    res.status(200).json(idQuestoes)
}