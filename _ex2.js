//Crie um programa que classifica a idade de uma pessoa em categorias (criança,
//adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
//controle if-else.

const readline = require ('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite a idade da pessoa: ', (resposta) => {
    const idade = parseInt(resposta);
    if (idade <= 12) {
        console.log("Categoria: Criança");
    } else if (idade <=17) {
        console.log("cateogoria: Adolescente");
    } else if (idade <= 59) {
        console.log("categoria: Adulto");
    } else { 
        console.log("Categoria: Idoso"); 
}
rl.close();
});
