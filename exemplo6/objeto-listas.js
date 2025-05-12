"use strict";
const pessoa = {
    nome: 'Mariana',
    idade: 28,
    profissao: 'desenvolvedora'
};
pessoa.idade = 25;
const andre = {
    nome: 'André',
    idade: 25,
    profissao: 'pintor'
};
const paula = {
    nome: 'Paula',
    idade: 25,
    profissao: 'Desenvolvedora'
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profissao[Profissao["JogadorDeFutebol"] = 3] = "JogadorDeFutebol";
})(Profissao || (Profissao = {}));
const vanessa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissao.Desenvolvedora
};
const jessica = {
    nome: 'Jéssica',
    idade: 28,
    profissao: Profissao.Desenvolvedora,
    materias: ['Matemática', 'Física']
};
const monica = {
    nome: 'Monica',
    idade: 28,
    materias: ['Matemática', 'Física']
};
function listar(lista) {
    for (const item of lista) {
        console.log('- ', item);
    }
}
listar(monica.materias);
