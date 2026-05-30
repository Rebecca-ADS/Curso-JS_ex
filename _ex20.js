/*20. Dado um array de strings, crie um objeto onde
 cada string é uma chave, e seu valor é o
número de vezes que a string aparece no array.*/
0

const frutas = [
    "maça",
    "banana",
    "maça",
    "uva",
    "banana",
    "maça"
];

function contarStrings(array) {

    let resultado = {};

    for (let item of array) {

        if (resultado[item]) {
            resultado[item]++;
        } else {
            resultado[item] = 1;
        }

    }

    return resultado;
}

console.log(contarStrings(frutas));