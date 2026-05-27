//Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
//Utilize switch-case para implementar a lógica de cada opção selecionada.

const readline = require ('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.clear();

console.log("==== Sorveteria ====");
console.log("1 - Chocolate");
console.log("2 - Morango");
console.log("3 - Baunilha");
console.log("4 - Sair");

rl.question("Escolha seu sorvete:",  function(opcao) {
    console.clear();
    switch( opcao) {
        case "1":
            console.log("Você escolhu sabor Chocolate");
            break;
            
        case "2": 
            console.log("Você escolheu sabor Morango");
            break;
        
        case "3":
            console.log("Você escolheu sabor Baunilha");
            break;

        case "4":
            console.log("Encerrando o pedido");
            break;
            
        default:
            console.log("Opção Inválida !");
    }     
    rl.close();

});
