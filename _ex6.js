// Programa para verificar se os lados formam um triângulo
// e identificar o tipo do triângulo

let A = 5;
let B = 5;
let C = 5;

// Verificando se forma um triângulo
if (A < B + C && B < A + C && C < A + B) {

    console.log("Os valores formam um triângulo.");

    // Verificando o tipo do triângulo
    if (A === B && B === C) {

        console.log("Triângulo Equilátero");

    } else if (A === B || A === C || B === C) {

        console.log("Triângulo Isósceles");

    } else {

        console.log("Triângulo Escaleno");

    }

} else {

    console.log("Os valores NÃO formam um triângulo.");

}