console.clear();

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let soma = 0;
let quantidade = 0;

function pedirNumero() {

    rl.question("Digite um número decimal (0 para sair): ", function(valor) {

        let numero = parseFloat(valor);

        if (numero === 0) {

            let media = soma / quantidade;

            console.log("Média:", media);

            rl.close();

        } else {

            soma += numero;
            quantidade++;

            console.clear();

            pedirNumero();

        }

    });

}

pedirNumero();