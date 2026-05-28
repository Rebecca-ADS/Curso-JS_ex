/*16. Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a
quantidade de elementos negativos da linha correspondente de M.*/

let M = [
    [ 1, -2,  3, -4,  5,  6, -7,  8],
    [-1, -2,  3,  4, -5,  6,  7, -8],
    [ 1,  2,  3,  4,  5, -6, -7, -8],
    [-1,  2, -3,  4, -5,  6,  7,  8],
    [ 1,  2, -3, -4,  5,  6,  7, -8],
    [-1, -2, -3, -4, -5,  6,  7,  8]
];

let C = [];

for (let i = 0; i < 6; i++) {

    let negativos = 0;

    for (let j = 0; j < 8; j++) {

        if (M[i][j] < 0) {
            negativos++;
        }
    }

    C[i] = negativos;
}

console.log("Vetor C:");
console.log(C);


