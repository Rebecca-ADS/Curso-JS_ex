const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite a nota do aluno: ", function(nota) {

    nota = Number(nota);

    if (nota >= 7) {
        console.log("Aprovado");
    }
    else if (nota >= 5) {
        console.log("Recuperação");
    }
    else {
        console.log("Reprovado");
    }

    rl.close();
});