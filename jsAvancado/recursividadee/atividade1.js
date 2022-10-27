function calcularTempoSaida(listaDeClientes, nomeCliente, index = 0) {
    const tempoPadrao = 15;
    const numeroDeClientes = listaDeClientes.length;

    if (numeroDeClientes === index){
        return null;
    } else if (listaDeClientes[index] === nomeCliente){
        return (numeroDeClientes - index) * tempoPadrao;
    } else {
        index++;
        return calcularTempoSaida(listaDeClientes, nomeCliente, index)
    }

}
console.log(calcularTempoSaida(clientes, 'Vera')); // – Resultado


// funcaoRecursiva("Menu 2", itens);
//     // ▪ "Menu 1”
console.log(funcaoRecursiva("Menu 2.1.1.1.2", itens))
//     // ▪ "Menu 2 > Menu 2.1 > Menu 2.1.1 > Menu 2.1.1.1 > Menu 2.1.1.1.2”
// funcaoRecursiva("Menu 3.1", itens);
//     // ▪ null – "Pois não existe Menu 3.1 nos itens do menu.”   



























