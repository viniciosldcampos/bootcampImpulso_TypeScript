let valorAny: any;
valorAny = 3;
valorAny = 'olá';
valorAny = true;

let valorString: string = 'teste';
// valorString = true; Dá errado
valorString = valorAny;  //Dá certo
let valorString2: string = 'testão';
valorString2 = valorAny;

function somarString(string1: string, string2: string) {
    console.log(string1 + string2);
}

somarString(valorString, valorString2);
somarString('olá', 'Como vai?');