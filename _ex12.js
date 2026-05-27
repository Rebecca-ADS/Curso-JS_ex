//12. Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa
//eretorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso
//ideal = 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7.

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularPesoIdeal(altura, sexo) {
    let pesoIdeal;  
    if (sexo.toLowerCase() === 'masculino') {
        pesoIdeal = 72.7 * altura - 58;
    } else if (sexo.toLowerCase() === 'feminino') {
        pesoIdeal = 62.1 * altura - 44.7;
    } else {
        return 'Sexo inválido. Por favor, informe "masculino" ou "feminino".';
    }
    return `O peso ideal para uma pessoa do sexo ${sexo} com altura de ${altura} metros é: ${pesoIdeal.toFixed(2)} kg.`;
}
rl.question('Digite a altura (em metros): ', (altura) => {
    rl.question('Digite o sexo (masculino/feminino): ', (sexo) => {
        const resultado = calcularPesoIdeal(parseFloat(altura), sexo);

        console.log(resultado);
        rl.close();
    });
}); 

    
