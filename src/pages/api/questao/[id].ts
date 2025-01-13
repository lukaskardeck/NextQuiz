import type { NextApiRequest, NextApiResponse } from "next";
import questoes from "../bancoDeQuestoes";

export default function questao(req: NextApiRequest, res: NextApiResponse) {
    const idDaQuestao = +(req.query.id || 0)
    const questao = questoes.filter( quest => quest.id ===  idDaQuestao)

    if (questao.length === 1) { // Existe uma questão com o id requisitado
        const questaoRequisitada = questao[0].embaralharRespostas()
        res.status(200).json(questaoRequisitada.paraObjeto());
    }

    else {
        res.status(404).json({
            erro: "Questão não encontrada!"
        });
    }
}