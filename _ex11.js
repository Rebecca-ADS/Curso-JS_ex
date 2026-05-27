//11. Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em
//dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas
//os dados das pessoas menores de idade.

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let nomes = [];
let idades = [];
let contador = 0;   
function lerDados() {
    if (contador < 9) {
        rl.question(`Digite o nome da pessoa ${contador + 1}: `, (nome) => {        
            rl.question(`Digite a idade da pessoa ${contador + 1}: `, (idade) => {
                nomes.push(nome);
                idades.push(parseInt(idade));
                contador++;
                lerDados();
            });
        });
    } else {
        console.log("Pessoas menores de idade:");   
        for (let i = 0; i < nomes.length; i++) {
            if (idades[i] < 18) {
                console.log(`Nome: ${nomes[i]}, Idade: ${idades[i]}`);
            }
        }
        rl.close();
    }
}
lerDados();









