/*19. Dado dois objetos, obj1 e obj2, escreva uma função que
 crie um novo objeto combinando as propriedades de ambos,
 onde as propriedades de obj2 têm precedência sobre as do obj1 em caso de conflitos*/

const obj1 = {
    nome: "Rebecca",
    idade: 43
};

const obj2 = {
    idade: 44,
    cidade: "Araraquara"
};

function combinarObjetos(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

console.log(combinarObjetos(obj1, obj2));