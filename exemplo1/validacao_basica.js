let button = document.getElementById('button');
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');

// Criação da função: somarNumeros colocando tipagem
function somarNumeros(numero1, numero2) {
    if (typeof numero1 === "number" && typeof numero2 === "number") {
        return numero1 + numero2
    } else {
    return Number(numero1) + Number(numero2)
    }
}

// Criação do funcionamento do botão:
 button.addEventListener('click', () => {
    console.log(somarNumeros(input1.value, input2.value))
})