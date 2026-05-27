/*14. A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando dados
sobre salário e número de filhos. Faça uma função que leia esses dados para um
número não determinado de pessoas e retorne a média de salário da população, a
média do número de filhos, o maior salário e o percentual de pessoas com salário até
R$350,00.

- média de salário da população
- média do número de filhos
- maior salário
- percentual de pessoas com salário até R$350,00
*/

console.clear();
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const habitantes = [];

function lerHabitante() {

    rl.question('Digite o salário do habitante (ou "sair" para finalizar): ', (salario) => {

        if (salario.toLowerCase() === 'sair') {

            rl.close();

            calcularEstatisticas();

        } else {

            rl.question('Digite o número de filhos do habitante: ', (numFilhos) => {

                const habitante = {

                    salario: parseFloat(salario),

                    numFilhos: parseInt(numFilhos)

                };

                habitantes.push(habitante);

                lerHabitante();

            });

        }

    });

}

function calcularEstatisticas() {

    const totalHabitantes = habitantes.length;

    const somaSalarios = habitantes.reduce(
        (acc, habitante) => acc + habitante.salario, 0
    );

    const somaFilhos = habitantes.reduce(
        (acc, habitante) => acc + habitante.numFilhos, 0
    );

    const maiorSalario = Math.max(
        ...habitantes.map(habitante => habitante.salario)
    );

    const percentualAte350 =
        (habitantes.filter(habitante => habitante.salario <= 350).length
        / totalHabitantes) * 100;

    const mediaSalario = somaSalarios / totalHabitantes;

    const mediaFilhos = somaFilhos / totalHabitantes;

    console.log(`\nMédia de salário: R$ ${mediaSalario.toFixed(2)}`);

    console.log(`Média de filhos: ${mediaFilhos.toFixed(2)}`);

    console.log(`Maior salário: R$ ${maiorSalario.toFixed(2)}`);

    console.log(`Percentual até R$350: ${percentualAte350.toFixed(2)}%`);

}

lerHabitante();


