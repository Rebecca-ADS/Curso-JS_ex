//5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
//determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
//utilizando if-else.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.clear();

rl.question("Digite seu peso: ", function(peso) {

    rl.question("Digite sua altura: ", function(altura) {

        peso = Number(peso);
        altura = Number(altura);

        let imc = peso / (altura * altura);

        console.clear();

        console.log("Seu IMC é: " + imc.toFixed(2));

        if (imc < 18.5) {
            console.log("Categoria: Baixo peso");
        }
        else if (imc < 25) {
            console.log("Categoria: Peso normal");
        }
        else if (imc < 30) {
            console.log("Categoria: Sobrepeso");
        }
        else {
            console.log("Categoria: Obesidade");
        }

        rl.close();
    });
});