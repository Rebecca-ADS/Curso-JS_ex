/*14. A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando dados
sobre salário e número de filhos. Faça uma função que leia esses dados para um
número não determinado de pessoas e retorne a média de salário da população, a
média do número de filhos, o maior salário e o percentual de pessoas com salário até
R$350,00.*/

console.clear();

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let totalSalario = 0;
let totalFilhos = 0;
let maiorSalario = 0;
let pessoas350 = 0;
let totalPessoas = 0;

function lerHabitante() {

    rl.question('Digite o salario: ', function(salario) {

        rl.question('Digite o numero de filhos: ', function(filhos) {

            salario = Number(salario);
            filhos = Number(filhos);

            totalSalario += salario;
            totalFilhos += filhos;

            totalPessoas++;

            if (salario > maiorSalario) {
                maiorSalario = salario;
            }

            if (salario <= 350) {
                pessoas350++;
            }

            rl.question('Deseja continuar? (s/n): ', function(resposta) {

                if (resposta === 's') {

                    lerHabitante();

                } else {

                    let mediaSalario = totalSalario / totalPessoas;

                    let mediaFilhos = totalFilhos / totalPessoas;

                    let percentual350 =
                        (pessoas350 / totalPessoas) * 100;

                    console.log('\nRESULTADOS');
                    console.log('Media salarial: ',
                        mediaSalario.toFixed(2));

                    console.log('Media de filhos: ',
                        mediaFilhos.toFixed(2));

                    console.log('Maior salario: ',
                        maiorSalario.toFixed(2));

                    console.log('Percentual ate R$350: ',
                        percentual350.toFixed(2) + '%');

                    rl.close();
                }
            });
        });
    });
}

lerHabitante();