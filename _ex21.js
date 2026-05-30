/*21. Suponha que você tem um array de objetos onde cada objeto
representa uma venda com vendedor e valor. Escreva uma função
que retorne um objeto que sumarize o total de vendas por vendedor.*/

const vendas = [
    { vendedor: "Ana", valor: 100 },
    { vendedor: "João", valor: 200 },
    { vendedor: "Ana", valor: 150 },
    { vendedor: "Maria", valor: 300 },
    { vendedor: "João", valor: 50 }
];

function totalVendasPorVendedor(vendas) {

    let resumo = {};

    for (let venda of vendas) {

        if (resumo[venda.vendedor]) {
            resumo[venda.vendedor] += venda.valor;
        } else {
            resumo[venda.vendedor] = venda.valor;
        }

    }

    return resumo;
}

console.log(totalVendasPorVendedor(vendas));