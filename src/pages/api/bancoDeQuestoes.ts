import QuestaoModel from "@/model/questao"
import RespostaModel from "@/model/resposta"

const questoes: QuestaoModel[] = [
    new QuestaoModel(
        301,
        "Qual é o bicho que transmite a doença de chagas?",
        [
            RespostaModel.falsa("Abelha"),
            RespostaModel.falsa("Barata"),
            RespostaModel.falsa("Pulga"),
            RespostaModel.verdadeira("Barbeiro")
        ]
    ),

    new QuestaoModel(
        302,
        "Qual é o maior planeta do sistema solar?",
        [
            RespostaModel.falsa("Terra"),
            RespostaModel.falsa("Marte"),
            RespostaModel.falsa("Vênus"),
            RespostaModel.verdadeira("Júpiter")
        ]
    ),
    
    new QuestaoModel(
        303,
        "Quantos elementos químicos há na tabela periódica?",
        [
            RespostaModel.falsa("108"),
            RespostaModel.falsa("116"),
            RespostaModel.falsa("120"),
            RespostaModel.verdadeira("118")
        ]
    ),
    
    new QuestaoModel(
        304,
        "Quem pintou o teto da Capela Sistina?",
        [
            RespostaModel.falsa("Leonardo da Vinci"),
            RespostaModel.falsa("Raphael"),
            RespostaModel.falsa("Donatello"),
            RespostaModel.verdadeira("Michelangelo")
        ]
    ),
    
    new QuestaoModel(
        305,
        "Qual é o nome do maior oceano do planeta Terra?",
        [
            RespostaModel.falsa("Atlântico"),
            RespostaModel.falsa("Índico"),
            RespostaModel.falsa("Ártico"),
            RespostaModel.verdadeira("Pacífico")
        ]
    ),    
]

export default questoes