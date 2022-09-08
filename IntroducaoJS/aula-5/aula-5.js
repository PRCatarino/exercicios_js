let recebeAnimal = prompt('Animal Name');

let listaEspecifica =  [
    'Cachorro', 
    'Gato', 
    'Coelho'
];
let encaminhaVeterinario = [
    'Cavalo', 
    'Cabra', 
    'Jumento'
];

let listaTotal = listaEspecifica.concat(encaminhaVeterinario).concat('passarinho').map(a=> a.toLowerCase());

if(listaTotal.indexOf(recebeAnimal.toLowerCase()) > -1){
    console.log('Atende');
}else{
    console.log('Não atende');
}
