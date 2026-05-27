/* 9. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
Fibonacci utilizando um loop for.*/

// Programa para mostrar os 10 primeiros números de Fibonacci

let a = 0;
let b = 1;

console.log("Sequência de Fibonacci:");

for (let i = 1; i <= 10; i++) {

    console.log(a);

    let proximo = a + b;

    a = b;

    b = proximo;

}