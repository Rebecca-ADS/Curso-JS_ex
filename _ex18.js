//18. Crie um objeto chamado dados que contém várias propriedades, incluindo números,
//strings e arrays. Escreva uma função que retorne um novo objeto apenas com as
//propriedades que são arrays.
const dados = {
    nome: "Rebecca",
    idade: 43,
    cursos: ["ADS", "AWS", "JavaScript"],
    cidade: "Araraquara",
    notas: [8, 9, 10],
    salario: 3500
};

const resultado = Object.fromEntries(
    Object.entries(dados).filter(([chave, valor]) => Array.isArray(valor))
);

console.log(resultado);
