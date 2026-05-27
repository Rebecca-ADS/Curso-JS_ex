//8. Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando
//um loop for ou while.

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite um número: ", function(valor) {

    let numero = parseInt(valor);
    let fatorial = 1;   

    for (let i = 1; i <= numero; i++) {
        fatorial = fatorial * i;
    }
    console.log("O fatorial de", numero, "é:", fatorial);
    rl.close();
});
