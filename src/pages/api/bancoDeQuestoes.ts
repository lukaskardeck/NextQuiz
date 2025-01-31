import QuestaoModel from "@/model/questao"
import RespostaModel from "@/model/resposta"

// const questoes: QuestaoModel[] = [
//     new QuestaoModel(
//         301,
//         "Qual é o bicho que transmite a doença de chagas?",
//         [
//             RespostaModel.falsa("Abelha"),
//             RespostaModel.falsa("Barata"),
//             RespostaModel.falsa("Pulga"),
//             RespostaModel.verdadeira("Barbeiro")
//         ]
//     ),

//     new QuestaoModel(
//         302,
//         "Qual é o maior planeta do sistema solar?",
//         [
//             RespostaModel.falsa("Terra"),
//             RespostaModel.falsa("Marte"),
//             RespostaModel.falsa("Vênus"),
//             RespostaModel.verdadeira("Júpiter")
//         ]
//     ),
    
//     new QuestaoModel(
//         303,
//         "Quantos elementos químicos há na tabela periódica?",
//         [
//             RespostaModel.falsa("108"),
//             RespostaModel.falsa("116"),
//             RespostaModel.falsa("120"),
//             RespostaModel.verdadeira("118")
//         ]
//     ),
    
//     new QuestaoModel(
//         304,
//         "Quem pintou o teto da Capela Sistina?",
//         [
//             RespostaModel.falsa("Leonardo da Vinci"),
//             RespostaModel.falsa("Raphael"),
//             RespostaModel.falsa("Donatello"),
//             RespostaModel.verdadeira("Michelangelo")
//         ]
//     ),
    
//     new QuestaoModel(
//         305,
//         "Qual é o nome do maior oceano do planeta Terra?",
//         [
//             RespostaModel.falsa("Atlântico"),
//             RespostaModel.falsa("Índico"),
//             RespostaModel.falsa("Ártico"),
//             RespostaModel.verdadeira("Pacífico")
//         ]
//     ),    
// ]

const questoes = [
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
        "Quem pintou a Mona Lisa?",
        [
            RespostaModel.falsa("Michelangelo"),
            RespostaModel.falsa("Van Gogh"),
            RespostaModel.falsa("Pablo Picasso"),
            RespostaModel.verdadeira("Leonardo da Vinci")
        ]
    ),
    new QuestaoModel(
        304,
        "Qual é o metal líquido à temperatura ambiente?",
        [
            RespostaModel.falsa("Ferro"),
            RespostaModel.falsa("Prata"),
            RespostaModel.falsa("Cobre"),
            RespostaModel.verdadeira("Mercúrio")
        ]
    ),
    new QuestaoModel(
        305,
        "Qual é a capital da Austrália?",
        [
            RespostaModel.falsa("Sydney"),
            RespostaModel.falsa("Melbourne"),
            RespostaModel.falsa("Brisbane"),
            RespostaModel.verdadeira("Canberra")
        ]
    ),
    new QuestaoModel(
        306,
        "Quem foi o primeiro presidente do Brasil?",
        [
            RespostaModel.falsa("Juscelino Kubitschek"),
            RespostaModel.falsa("Getúlio Vargas"),
            RespostaModel.falsa("Dom Pedro II"),
            RespostaModel.verdadeira("Deodoro da Fonseca")
        ]
    ),
    new QuestaoModel(
        307,
        "Quantos ossos tem o corpo humano adulto?",
        [
            RespostaModel.falsa("200"),
            RespostaModel.falsa("250"),
            RespostaModel.falsa("300"),
            RespostaModel.verdadeira("206")
        ]
    ),
    new QuestaoModel(
        308,
        "Qual é o rio mais longo do mundo?",
        [
            RespostaModel.falsa("Rio Amazonas"),
            RespostaModel.falsa("Rio Yangtzé"),
            RespostaModel.falsa("Rio Mississipi"),
            RespostaModel.verdadeira("Rio Nilo")
        ]
    ),
    new QuestaoModel(
        309,
        "Quem escreveu 'Dom Quixote'?",
        [
            RespostaModel.falsa("William Shakespeare"),
            RespostaModel.falsa("Machado de Assis"),
            RespostaModel.falsa("José de Alencar"),
            RespostaModel.verdadeira("Miguel de Cervantes")
        ]
    ),
    new QuestaoModel(
        310,
        "Qual é a montanha mais alta do mundo?",
        [
            RespostaModel.falsa("Monte McKinley"),
            RespostaModel.falsa("Monte Kilimanjaro"),
            RespostaModel.falsa("Monte Elbrus"),
            RespostaModel.verdadeira("Monte Everest")
        ]
    ),
    new QuestaoModel(
        311,
        "Quem descobriu o Brasil?",
        [
            RespostaModel.falsa("Cristóvão Colombo"),
            RespostaModel.falsa("Fernão de Magalhães"),
            RespostaModel.falsa("Américo Vespúcio"),
            RespostaModel.verdadeira("Pedro Álvares Cabral")
        ]
    ),
    new QuestaoModel(
        312,
        "Qual é o símbolo químico do ouro?",
        [
            RespostaModel.falsa("Ag"),
            RespostaModel.falsa("Pb"),
            RespostaModel.falsa("Cu"),
            RespostaModel.verdadeira("Au")
        ]
    ),
    new QuestaoModel(
        313,
        "Em que ano ocorreu a Proclamação da República no Brasil?",
        [
            RespostaModel.falsa("1822"),
            RespostaModel.falsa("1885"),
            RespostaModel.falsa("1900"),
            RespostaModel.verdadeira("1889")
        ]
    ),
    new QuestaoModel(
        314,
        "Quem foi o primeiro homem a pisar na Lua?",
        [
            RespostaModel.falsa("Buzz Aldrin"),
            RespostaModel.falsa("Yuri Gagarin"),
            RespostaModel.falsa("Michael Collins"),
            RespostaModel.verdadeira("Neil Armstrong")
        ]
    ),
    new QuestaoModel(
        315,
        "Qual é a camada da atmosfera responsável pela proteção contra os raios UV?",
        [
            RespostaModel.falsa("Troposfera"),
            RespostaModel.falsa("Mesosfera"),
            RespostaModel.falsa("Exosfera"),
            RespostaModel.verdadeira("Camada de Ozônio")
        ]
    ),
    new QuestaoModel(
        316,
        "Qual é o nome do maior oceano do mundo?",
        [
            RespostaModel.falsa("Oceano Atlântico"),
            RespostaModel.falsa("Oceano Índico"),
            RespostaModel.falsa("Oceano Ártico"),
            RespostaModel.verdadeira("Oceano Pacífico")
        ]
    )
];


export default questoes