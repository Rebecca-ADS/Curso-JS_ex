/*13. Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada no
seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e
salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na
tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
○ Matrícula:
○ Nome:
○ Salário bruto:
○ Dedução INSS:
○ Salário líquido:
○ (Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a
redução do INSS).*/

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const funcionarios = [];
function lerFuncionario() {
    if (funcionarios.length < 80) {
        rl.question('Digite a matrícula do funcionário: ', (matricula) => {
            rl.question('Digite o nome do funcionário: ', (nome) => {
                rl.question('Digite o salário bruto do funcionário: ', (salarioBruto) => {
                    const funcionario = {
                        matricula,  
                        nome,
                        salarioBruto: parseFloat(salarioBruto)
                    };
                    funcionarios.push(funcionario);
                    lerFuncionario();
                });
            });
        });
    } else {
        rl.close();
        emitirContracheques();
    }   
}
function emitirContracheques() {
    funcionarios.forEach(funcionario => {
        const deducaoINSS = funcionario.salarioBruto * 0.12;
        const salarioLiquido = funcionario.salarioBruto - deducaoINSS;  
        console.log(`Matrícula: ${funcionario.matricula}`);
        console.log(`Nome: ${funcionario.nome}`);
        console.log(`Salário bruto: R$ ${funcionario.salarioBruto.toFixed(2)}`);
        console.log(`Dedução INSS: R$ ${deducaoINSS.toFixed(2)}`);
        console.log(`Salário líquido: R$ ${salarioLiquido.toFixed(2)}`);
        console.log('-----------------------------');
    });
}
lerFuncionario();



