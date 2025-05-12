type input = number | string;

function somarValores(input1: input, input2: input) {
    if (typeof input1 === 'string' || typeof input2 === 'string') {
        return input1.toString() + input2.toString();
    } else {
        return input1 + input2;
    }
 }

 console.log(somarValores(1, 56));
 console.log(somarValores('Olá, ','tudo bem?'));
 console.log(somarValores('Que dia é hoje? ', 14));


// Mesma função acima sem o uso do type. 
function somarValores2(input1: number | string, input2: number | string) {
    if (typeof input1 === 'string' || typeof input2 === 'string') {
        return input1.toString() + input2.toString();
    } else {
    return input1 + input2;
    }
}
console.log(somarValores2(1, 56));
console.log(somarValores2('Olá, ','tudo bemmm?'));
console.log(somarValores2('Que dia é hoje? ', 14));
