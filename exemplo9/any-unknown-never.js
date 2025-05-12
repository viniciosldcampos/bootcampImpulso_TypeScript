"use strict";
//
let anyEstaDeVolta;
anyEstaDeVolta = 3;
anyEstaDeVolta = 'teste';
anyEstaDeVolta = 5;
let stringTest = 'verificar';
stringTest = anyEstaDeVolta;
let unknownValor;
unknownValor = 3;
unknownValor = 'opa';
unknownValor = true;
unknownValor = 'vai sim';
let stringTest2 = 'agora vai';
if (typeof unknownValor === 'string') {
    stringTest2 = unknownValor;
}
// Erro - throw e declarando void:
function jogaErro(erro, codigo) {
    throw { error: erro, code: codigo };
}
// Erro - throw e declarando never:
function jogaErro2(erro, codigo) {
    throw { error: erro, code: codigo };
}
jogaErro('deu erro', 500);
jogaErro2('deu erro', 700);
